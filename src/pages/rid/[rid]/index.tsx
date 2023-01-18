import { Button, Icon, Text } from 'components';
import StackedBarChart from 'components/StackedBarChart/StackedBarChart';
import useData from 'hooks/useData';
import { Layout, RefractLayout } from 'layouts';
import RefractBlock from 'modules/refract/RefractBlock';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from 'pages/_app';
import { ReactNode, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { refractPhaseState, useRefractPhaseActions } from 'states/refractPhaseState';
import { basicFadeIn } from 'theme/animations.css';
import { Box, Flex, FlexCol, FlexRow } from 'theme/components';
import { RefractData } from 'utils/types/refractData';

const Refraction: NextPageWithLayout = () => {
  const { isTopSkew } = useRecoilValue(refractPhaseState);
  const { setIsTopSkew } = useRefractPhaseActions();
  const router = useRouter();
  const { data, error, isValidating } = useData(router?.query?.rid ? `${router.query.rid}` : '');

  const sortedBalanceData = useMemo(() => {
    if (data && !error && !isValidating) {
      const sortedData = data.data.sort(
        (a: RefractData, b: RefractData) => b.percentage - a.percentage
      );
      const organisedData = data.data.slice(0, 5);

      let sumOfOtherAssets = 0;
      const otherAssets = sortedData.slice(5, -1).map((otherAsset: RefractData) => {
        sumOfOtherAssets += otherAsset.percentage;
        return {
          name: otherAsset.token.name,
          percentage: otherAsset.percentage,
          metaType: 'other',
        };
      });
      organisedData.push({
        apps: otherAssets,
        percentage: sumOfOtherAssets,
        token: {
          colors: ['#000000', '#FFFFFF'],
          decimals: 18,
          mainColor: '#9AF46F',
          id: 'other-assets',
          name: 'Other Assets',
          symbol: 'OTHER',
        },
      });
      return organisedData;
    } else {
      return [];
    }
  }, [data]);

  return (
    <Box className={basicFadeIn} width={{ sm: 'full', md: 'auto' }}>
      {isTopSkew && (
        <Flex
          position={'absolute'}
          top='0'
          left='0'
          width='full'
          display={{ sm: 'none', md: 'block' }}
        >
          <Button
            label='Reset View'
            variant='none'
            color='action'
            width={'full'}
            onClick={() => setIsTopSkew(false)}
          />
        </Flex>
      )}
      {/* Workaround below for bug with vanilla extract that hides to verified icon on desktop when display: none on mobile block */}
      <FlexRow
        alignItems={'center'}
        width='full'
        justifyContent={'space-between'}
        visibility={{ sm: 'visible', md: 'hidden' }}
      >
        <Text
          alignItems='center'
          display='flex'
          level='f5'
          textTransform={'uppercase'}
          color='secondary'
        >
          <Icon name='verified-chromatic' size={18} />
          Verified
        </Text>
        <Button textTransform='uppercase' label='refract info' />
      </FlexRow>
      <FlexCol width='full' marginTop={'12x'} gap='4x' display={{ sm: 'none', md: 'flex' }}>
        <FlexRow gap='2x' width={'full'} justifyContent='space-between'>
          <FlexRow alignItems={'center'} gap='0x'>
            <Icon name='verified-chromatic' size={24} />
            <Text level='f5' textTransform={'uppercase'} color='secondary'>
              verified
            </Text>
          </FlexRow>
        </FlexRow>
        <FlexRow gap='1x'>
          {sortedBalanceData &&
            sortedBalanceData.map(({ token, apps, percentage }: RefractData) => {
              return (
                <RefractBlock percentage={percentage} key={token.id} apps={apps} token={token} />
              );
            })}
        </FlexRow>
      </FlexCol>
      <StackedBarChart />
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { rid } = context.params;
  return {
    props: {
      rid,
    },
  };
};

Refraction.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout>
      <RefractLayout>{page}</RefractLayout>
    </Layout>
  );
};

export default Refraction;
