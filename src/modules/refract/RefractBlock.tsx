import { useRefractPhaseActions } from 'states/refractPhaseState';
import { FlexCol } from 'theme/components';
import * as styles from './RefractBlock.css';
import RefractDetailsDesk from './RefractDetails/Desktop/RefractDetailsDesk';

interface RefractBlockProps {
  asset: string;
}

const RefractBlock = ({ asset }: RefractBlockProps) => {
  const { setIsTopSkew } = useRefractPhaseActions();
  return (
    <FlexCol
      gap='5x'
      className={styles.refractBlock}
      onClick={() => setIsTopSkew(true)}
      display={{ sm: 'none', md: 'block' }}
    >
      <RefractDetailsDesk asset={asset} />
    </FlexCol>
  );
};

export default RefractBlock;
