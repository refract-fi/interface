import { Text } from 'components';
import { useEffect } from 'react';
import { useFormPhaseActions } from 'states/formPhasesState';
import { Box, FlexCol } from 'theme/components';
import { FormPhases } from 'utils/types/formPhase';
import * as styles from './Generating.css';

const GeneratingRefract = () => {
  const { setPhase } = useFormPhaseActions();
  useEffect(() => {
    const generatingTimeout = setTimeout(() => {
      setPhase(FormPhases.COMPLETED);
    }, 9000);
    return () => clearTimeout(generatingTimeout);
  }, []);
  return (
    <FlexCol
      marginTop={'12x'}
      className={styles.generatingAnim}
      alignItems='center'
      justifyContent={'center'}
    >
      <Text level='f4' color='secondary' textTransform={'uppercase'} marginTop='5x'>
        Anonymizing Accounts...
      </Text>
      <video width='500' height='500' autoPlay muted loop>
        <source src='/animation.mp4' type='video/mp4' />
      </video>
    </FlexCol>
  );
};

export default GeneratingRefract;
