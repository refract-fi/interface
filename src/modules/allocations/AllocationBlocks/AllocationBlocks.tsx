import { Flex } from 'theme/components';
import AllocationBlock from '../AllocationBlock/AllocationBlock';
import * as styles from './AllocationBlocks.css';

const AllocationBlocks = () => {
  return (
    <Flex width={'full'} marginX={'3x'} className={styles.allocationBlocksWrapper}>
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
        title='DEPOSITS'
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
        title='CLAIMABLE'
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
        title='LOCKED'
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
        title='VESTING'
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
        title='NFTS'
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
        title='DEBT'
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

export default AllocationBlocks;
