import { Refract } from 'components';
import AllocationsFadeZone from 'modules/allocations/AllocationsFadeZone';
import { useRecoilValue } from 'recoil';
import { refractState } from 'states/refractState';
import { Box } from 'theme/components';
import * as styles from './index.css';
import RefractFadeZone from './RefractFadeZone';

const RefractModule = () => {
  const { refractPhase, allocationFade, statsFade } = useRecoilValue(refractState);

  return (
    <Box position={'relative'}>
      <Refract phase={refractPhase} />
      <RefractFadeZone />
      <Box
        display={allocationFade || statsFade ? 'block' : 'none'}
        width={'full'}
        position='absolute'
        top={'0'}
        className={styles.fadeInAnim}
      >
        {allocationFade && (
          <>
            <AllocationsFadeZone />
          </>
        )}
        {statsFade && (
          <Box width={'full'} textAlign='center'>
            I like cheese
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default RefractModule;
