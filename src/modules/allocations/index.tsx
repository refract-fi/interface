import clsx from 'clsx';
import { Refract } from 'components';
import { RefractPhases } from 'components/Refract/Refract';
import { fadeInAnim, fadeOutAnim } from 'modules/refract/index.css';
import RefractFadeZone from 'modules/refract/RefractFadeZone';
import { useRecoilValue } from 'recoil';
import { refractState } from 'states/refractState';
import { Box, FlexCol } from 'theme/components';
import AllocationsFadeZone from './AllocationsFadeZone';

const AllocationsModule = () => {
  const { refractPhase, refractFade } = useRecoilValue(refractState);
  return (
    <FlexCol width={'full'} marginX='24x' alignItems={'center'}>
      <Box position={'absolute'}>
        <Refract phase={refractPhase} />
        {refractFade && (
          <Box className={fadeInAnim}>
            <RefractFadeZone />
          </Box>
        )}
      </Box>
      <Box width={'full'} className={clsx(refractFade && fadeOutAnim)}>
        <AllocationsFadeZone />
      </Box>
    </FlexCol>
  );
};

export default AllocationsModule;
