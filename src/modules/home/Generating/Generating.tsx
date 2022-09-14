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
      <iframe
        src='https://giphy.com/embed/l0HlNYMuXXFViXTSE'
        width='480'
        height='480'
        frameBorder='0'
        className='giphy-embed'
        allowFullScreen
      ></iframe>
    </FlexCol>
  );
};

export default GeneratingRefract;
