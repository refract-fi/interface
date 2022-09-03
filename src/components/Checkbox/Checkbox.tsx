import clsx from 'clsx';
import { Text } from 'components';
import { Box, FlexRow } from 'theme/components';
import * as styles from './Checkbox.css';

interface CheckboxProps {
  checked: any;
  setChecked: () => void;
  label: string;
  variant?: 'none' | 'button';
  checkmarkType?: 'standard' | 'line';
  onClick?: () => void;
}

const Checkbox = ({
  checked,
  setChecked,
  label,
  variant = 'none',
  checkmarkType = 'standard',
}: CheckboxProps) => {
  return (
    <FlexRow
      alignItems={'center'}
      gap='2x'
      paddingX='2x'
      paddingY='1x'
      className={clsx(styles.checkboxWrapperVariants[variant], checked && 'active')}
      onClick={() => setChecked()}
    >
      <Box
        component={'input'}
        type='checkbox'
        checked={checked}
        onChange={() => setChecked()}
        className={clsx(styles.checkbox, checkmarkType === 'line' && 'checkmark-line')}
        width='4x'
        height='4x'
      />
      <Text level='b2'>{label}</Text>
    </FlexRow>
  );
};

export default Checkbox;
