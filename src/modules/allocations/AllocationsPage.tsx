import { Title } from 'components';
import { basicFadeIn } from 'theme/animations.css';
import { FlexCol, FlexRow } from 'theme/components';
import AllocationBlocks from './AllocationBlocks/AllocationBlocks';
import AllocationSpread from './AllocationSpread/AllocationSpread';
import * as styles from './AllocationsPage.css';
import clsx from 'clsx';

const AllocationsPage = () => {
  return (
    <FlexCol
      width={'full'}
      marginX='28x'
      paddingX='3x'
      alignItems={'center'}
      className={clsx(styles.allocationsPageWrapper, basicFadeIn)}
    >
      <FlexCol
        width='full'
        position='sticky'
        top={'18x'}
        backgroundColor='black'
        zIndex={2}
        paddingTop='12x'
      >
        <FlexRow width='full' paddingY={'4x'}>
          <Title special>Allocations</Title>
        </FlexRow>
        <AllocationSpread />
      </FlexCol>
      <AllocationBlocks />
    </FlexCol>
  );
};

export default AllocationsPage;
