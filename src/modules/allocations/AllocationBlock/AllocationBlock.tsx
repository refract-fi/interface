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
    <FlexRow className={styles.blockWrapper} marginY='3x'>
      <FlexCol gap='4x' width={'full'} paddingX='3x'>
        <FlexRow alignItems='center' width={'full'} justifyContent='space-between'>
          <FlexRow alignItems={'center'} gap='2x'>
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
    </FlexRow>
  );
};

export default AllocationBlock;
