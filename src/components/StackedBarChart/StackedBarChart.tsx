import clsx from 'clsx';
import Text from 'components/Typography/Text';
import { useRecoilValue } from 'recoil';
import { refractPhaseState } from 'states/refractPhaseState';
import { Box, FlexCol, FlexRow } from 'theme/components';
import * as styles from './StackedBarChart.css';

const StackedBarChart = () => {
  const { isTopSkew } = useRecoilValue(refractPhaseState);
  return (
    <>
      {isTopSkew && (
        <FlexRow className={clsx(styles.barChartWrapper)}>
          <FlexCol alignItems='center' position={'relative'} width='10x' backgroundColor={'action'}>
            <FlexCol position={'absolute'} bottom='9x' alignItems={'center'} gap='0x'>
              <Text level='f3'>32.81%</Text>
              <Text level='b4' textTransform={'uppercase'} weight='bold'>
                Wallet
              </Text>
              <Box height='28x' width={1} background='white-inverted' marginTop={'1x'} />
            </FlexCol>
          </FlexCol>
          <FlexCol
            alignItems='center'
            position={'relative'}
            width='full'
            backgroundColor={'action'}
          >
            <FlexCol position={'absolute'} top='7x' alignItems={'center'} gap='0x'>
              <Box height='28x' width={1} background='white' marginTop={'1x'} />
              <Text level='f3'>32.81%</Text>
              <Text level='b4' textTransform={'uppercase'} weight='bold'>
                Tests
              </Text>
            </FlexCol>
          </FlexCol>
          <FlexCol className={styles.test}>
            <Box />
          </FlexCol>
          <FlexCol className={styles.test1}>
            <Box />
          </FlexCol>
          <FlexCol className={styles.test2}>
            <Box />
          </FlexCol>
        </FlexRow>
      )}
    </>
  );
};

export default StackedBarChart;
