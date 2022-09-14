import { FlexRow } from 'theme/components';
import AllocationSegment from '../AllocationSegment/AllocationSegment';

const AllocationSpread = () => {
  return (
    <FlexRow gap='1x' width='full' justifyContent={'center'} paddingX='3x' marginBottom={'2x'}>
      <AllocationSegment percent={0.1} label='wallet' />
      <AllocationSegment percent={0.3} label='deposits' />
      <AllocationSegment percent={0.35} label='locked' />
      <AllocationSegment percent={0.25} label='claimable' />
    </FlexRow>
  );
};

export default AllocationSpread;
