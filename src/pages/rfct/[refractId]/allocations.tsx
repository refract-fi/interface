import AllocationBlock from 'components/AllocationBlock/AllocationBlock';
import { RefractLayout } from 'layouts';
import { NextPageWithLayout } from 'pages/_app';
import { ReactNode } from 'react';
import { Flex } from 'theme/components';

const Allocations: NextPageWithLayout = () => {
  return (
    <Flex width={'full'} gap='3x'>
      <AllocationBlock
        title='WALLET'
        allocationShare={0.22}
        allocations={[
          {
            symbol: 'eth',
            url: 'https://storage.googleapis.com/zapper-fi-assets/tokens/ethereum/0x0000000000000000000000000000000000000000.png',
            share: 0.22,
          },
          {
            symbol: 'eth',
            url: 'https://storage.googleapis.com/zapper-fi-assets/tokens/ethereum/0x0000000000000000000000000000000000000000.png',
            share: 0.22,
          },
          {
            symbol: 'eth',
            url: 'https://storage.googleapis.com/zapper-fi-assets/tokens/ethereum/0x0000000000000000000000000000000000000000.png',
            share: 0.22,
          },
        ]}
      />
      <AllocationBlock
        title='WALLET'
        allocationShare={0.22}
        allocations={[
          {
            symbol: 'eth',
            url: 'https://storage.googleapis.com/zapper-fi-assets/tokens/ethereum/0x0000000000000000000000000000000000000000.png',
            share: 0.22,
          },
        ]}
      />
      <AllocationBlock
        title='WALLET'
        allocationShare={0.22}
        allocations={[
          {
            symbol: 'eth',
            url: 'https://storage.googleapis.com/zapper-fi-assets/tokens/ethereum/0x0000000000000000000000000000000000000000.png',
            share: 0.22,
          },
        ]}
      />
    </Flex>
  );
};

Allocations.getLayout = function getLayout(page: ReactNode) {
  return <RefractLayout>{page}</RefractLayout>;
};

export default Allocations;
