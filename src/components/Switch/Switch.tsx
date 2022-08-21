import clsx from 'clsx';
import { Box } from 'theme/components';
import * as styles from './Switch.css';

interface SwitchProps {
  isChecked: boolean;
}

const Switch = ({ isChecked }: SwitchProps) => {
  return (
    <Box className={clsx(styles.switchWrapper, isChecked ? 'checked' : '')}>
      <Box className={clsx(styles.slider, isChecked ? 'checked' : '')} />
    </Box>
  );
};

export default Switch;
