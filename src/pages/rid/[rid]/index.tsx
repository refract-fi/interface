import { Icon, Refract, Text } from 'components';
import { Layout, RefractLayout } from 'layouts';
import RefractBlock from 'modules/refract/RefractBlock';
import { NextPageWithLayout } from 'pages/_app';
import { ReactNode } from 'react';
import { Box, Flex, FlexCol, FlexRow } from 'theme/components';

const Refraction: NextPageWithLayout = () => {
  return (
    <Box>
      <Refract />
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
              refract.fi/rfct/asdiua8sy98
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
