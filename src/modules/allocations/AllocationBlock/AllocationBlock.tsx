import { Text, Title } from 'components';
import { Box, FlexCol, FlexRow } from 'theme/components';
import * as styles from './AllocationBlock.css';

interface AllocationProps {
  url: string;
  symbol: string;
  share: number;
}

interface AllocationBlockProps {
  title: string;
  allocationShare: number;
  allocations: AllocationProps[];
}

const AllocationBlock = ({ title, allocationShare, allocations }: AllocationBlockProps) => {
  return (
    <FlexCol backgroundColor={'bg-primary'} padding='3x' flex={1} gap='4x'>
      <FlexRow alignItems='center' width={'full'} justifyContent='space-between'>
        <FlexRow alignItems={'center'} gap='2x'>
          <Box backgroundColor={'red'} className={styles.sectionBanderole} />
          <Title level='6' textTransform='uppercase'>
            {title}
          </Title>
        </FlexRow>
        <Text level='f3'>{allocationShare * 100}%</Text>
      </FlexRow>
      <FlexCol gap='2x'>
        {allocations.map((allocation: AllocationProps, index: number) => (
          <FlexRow key={`${allocation}-${index}`} justifyContent='space-between'>
            <FlexRow alignItems='center' gap='2x'>
              <img src={allocation.url} className={styles.tokenSymbol} />
              <Text level='b2' textTransform={'uppercase'}>
                {allocation.symbol}
              </Text>
            </FlexRow>
            <Text level='f4'>{allocation.share * 100}%</Text>
          </FlexRow>
        ))}
      </FlexCol>
    </FlexCol>
  );
};

export default AllocationBlock;
