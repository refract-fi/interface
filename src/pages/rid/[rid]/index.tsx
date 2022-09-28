import { Button, Icon, Text } from 'components';
import StackedBarChart from 'components/StackedBarChart/StackedBarChart';
import { Layout, RefractLayout } from 'layouts';
import RefractBlock from 'modules/refract/RefractBlock';
import { NextPageWithLayout } from 'pages/_app';
import { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import { refractPhaseState, useRefractPhaseActions } from 'states/refractPhaseState';
import { basicFadeIn } from 'theme/animations.css';
import { Box, Flex, FlexCol, FlexRow } from 'theme/components';

const Refraction: NextPageWithLayout = () => {
  const { isTopSkew } = useRecoilValue(refractPhaseState);
  const { setIsTopSkew } = useRefractPhaseActions();
  return (
    <Box className={basicFadeIn}>
      {isTopSkew && (
        <Flex position={'absolute'} top='0' left='0' width='full'>
          <Button
            label='Reset View'
            variant='none'
            color='action'
            width={'full'}
            onClick={() => setIsTopSkew(false)}
          />
        </Flex>
      )}
      <FlexCol width='full' marginTop={'12x'} gap='4x'>
        <FlexRow gap='2x' width={'full'} justifyContent='space-between'>
          <FlexRow alignItems={'center'} gap='0x'>
            <Icon name='verified-chromatic' />
            <Text level='f5' textTransform={'uppercase'} color='secondary'>
              verified
            </Text>
          </FlexRow>
          <FlexRow alignItems={'center'} gap='0x'>
            <Icon name='copy' stroke={'secondary'} />
            <Text level='f5' textTransform={'uppercase'} color='secondary'>
              refract.fi/rid/asdiua8sy98
            </Text>
          </FlexRow>
          <FlexRow alignItems={'center'} gap='0x'>
            <Icon name='hourglass' stroke='secondary' />
            <Text level='f5' textTransform={'uppercase'} color='secondary'>
              expires Nov 28th 2021 10:45:34pm
            </Text>
          </FlexRow>
          <FlexRow alignItems={'center'} gap='0x'>
            <Icon name='snapshot' stroke='secondary' />
            <Text level='f5' textTransform={'uppercase'} color='secondary'>
              SNAPSHOT TAKEN oct 28th 2021 10:45:34pm
            </Text>
          </FlexRow>
        </FlexRow>
        <FlexRow gap='1x'>
          <RefractBlock asset='ETH' />
          <RefractBlock asset='USDC' />
          <RefractBlock asset='TOKE' />
        </FlexRow>
      </FlexCol>
      <StackedBarChart />
    </Box>
  );
};

Refraction.getLayout = function getLayout(page: ReactNode) {
  return (
    <Layout>
      <RefractLayout>{page}</RefractLayout>
    </Layout>
  );
};

export default Refraction;
