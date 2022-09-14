import { assignInlineVars } from '@vanilla-extract/dynamic';
import { Text } from 'components';
import { Box, FlexCol } from 'theme/components';
import * as styles from './AllocationSegment.css';

interface AllocationSegmentProps {
  label: string;
  percent: number;
}

const AllocationSegment = ({ label, percent }: AllocationSegmentProps) => {
  const bgColor = (label: string) => {
    switch (label) {
      case 'wallet':
        return 'orange';
      case 'deposits':
        return 'gold';
      case 'locked':
        return 'yellow';
      case 'claimable':
        return 'arctic';
      case 'nfts':
        return 'blue';
      case 'debt':
        return 'red';
    }
  };

  return (
    <FlexCol
      alignItems={'center'}
      className={styles.segmentWrapper}
      style={assignInlineVars({ [styles.proportion]: `${percent * 100}%` })}
    >
      <Box
        width='full'
        backgroundColor={bgColor(label)}
        className={styles.line}
        marginBottom='1x'
      />
      <Text level='f4'>{percent * 100}%</Text>
      <Text level='b3' color='secondary' textTransform={'uppercase'}>
        {label}
      </Text>
    </FlexCol>
  );
};

export default AllocationSegment;
