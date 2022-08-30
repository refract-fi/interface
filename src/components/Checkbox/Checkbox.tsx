import { Text } from 'components';
import { Box, FlexRow } from 'theme/components';
import { checkbox } from './Checkbox.css';

interface CheckboxProps {
  checked: boolean;
  setChecked: (checked: boolean) => void;
}

const Checkbox = ({ checked, setChecked }: CheckboxProps) => {
  return (
    <FlexRow alignItems={'center'} gap='2x'>
      <Box
        component={'input'}
        type='checkbox'
        checked={checked}
        onChange={() => setChecked(!checked)}
        className={checkbox}
        width='4x'
        height='4x'
      />
      <Text level='b2'>Ethereum</Text>
    </FlexRow>
  );
};

export default Checkbox;
