import clsx from 'clsx';
import { Text } from 'components';
import { Box, FlexCol, FlexRow } from 'theme/components';
import * as styles from './RefractBlock.css';

interface RefractBlockProps {
  asset: string;
}

const RefractBlock = ({ asset }: RefractBlockProps) => {
  return (
    <FlexCol gap='5x' className={styles.refractBlock}>
      <FlexRow>
        <Box
          component='span'
          className={clsx(styles.assetBlock, 'assetBlock')}
          height={'2x'}
          width='10x'
          marginRight={'0x'}
        />
        <Box
          component='span'
          className={clsx(styles.assetBlock, 'assetBlock')}
          height={'2x'}
          width='7x'
          marginRight='1x'
        />
        <Box
          component='span'
          className={clsx(styles.assetBlock, 'assetBlock')}
          height={'2x'}
          width='2x'
          marginRight='0x'
        />
        <Box
          component='span'
          className={clsx(styles.assetBlock, 'assetBlock')}
          height={'2x'}
          width='2x'
          marginRight='0x'
        />
        <Box
          component='span'
          className={clsx(styles.assetBlock, 'assetBlock')}
          height={'2x'}
          width='1x'
          marginRight={2}
        />
        <Box
          component='span'
          className={clsx(styles.assetBlock, 'assetBlock')}
          height={'2x'}
          width='0x'
          marginRight={2}
        />
        <Box
          component='span'
          className={clsx(styles.assetBlock, 'assetBlock')}
          height={'2x'}
          width='8x'
          marginRight={'2x'}
        />
        <Box
          component='span'
          className={clsx(styles.assetBlock, 'assetBlock')}
          height={'2x'}
          width='0x'
          marginRight={2}
        />
        <Box
          component='span'
          className={clsx(styles.assetBlock, 'assetBlock')}
          height={'2x'}
          width='24x'
        />
      </FlexRow>
      <FlexCol alignItems={'center'}>
        <Text level='f3'>41.12%</Text>
        <Text marginTop='1x' marginBottom={'0x'} level='b3'>
          {asset}
        </Text>
        <Text level='b4' color='secondary'>
          click to view details
        </Text>
      </FlexCol>
    </FlexCol>
  );
};

export default RefractBlock;
