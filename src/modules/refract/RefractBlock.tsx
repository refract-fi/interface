import { useRefractPhaseActions } from 'states/refractPhaseState';
import { FlexCol } from 'theme/components';
import { DataApp, RefractData, Token } from 'utils/types/refractData';
import * as styles from './RefractBlock.css';
import RefractDetailsDesk from './RefractDetails/Desktop/RefractDetailsDesk';

interface RefractBlockProps {
  apps: DataApp[];
  token: Token;
  percentage: number;
}

const RefractBlock = ({ apps, percentage, token }: RefractBlockProps) => {
  const { setIsTopSkew } = useRefractPhaseActions();
  return (
    <FlexCol
      gap='5x'
      className={styles.refractBlock}
      onClick={() => setIsTopSkew(true)}
      display={{ sm: 'none', md: 'block' }}
      style={{ width: `${percentage}%` }}
    >
      <RefractDetailsDesk apps={apps} percentage={percentage} token={token} />
    </FlexCol>
  );
};

export default RefractBlock;
