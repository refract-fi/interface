import { Flex, FlexCol } from 'theme/components';
import AllocationBlock from '../AllocationBlock/AllocationBlock';
import * as styles from './AllocationBlocks.css';

const AllocationBlocks = () => {
  return (
    <FlexCol width={'full'} marginTop='4x'>
      <AllocationBlock
        title='WALLET'
        allocationShare={0.2212}
        iconName='wallet'
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
        iconName='deposit'
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
        iconName='claimable'
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
        iconName='locked'
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
        iconName='vesting'
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
        iconName='nft'
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
        iconName='debt'
        allocations={[
          {
            symbol: 'eth',
            url: 'https://storage.googleapis.com/zapper-fi-assets/tokens/ethereum/0x0000000000000000000000000000000000000000.png',
            share: 0.22,
          },
        ]}
      />
    </FlexCol>
  );
};

export default AllocationBlocks;
