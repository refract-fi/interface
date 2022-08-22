import clsx from 'clsx';
import { Box, BoxProps } from 'theme/components';
import * as styles from './Switch.css';

interface SwitchProps extends BoxProps {
  toggled: boolean;
}

const Switch = ({ toggled, ...restProps }: SwitchProps) => {
  return (
    <Box className={clsx(styles.switchWrapper, toggled ? 'checked' : '')} {...restProps}>
      <Box className={clsx(styles.slider, toggled ? 'checked' : '')} />
    </Box>
  );
};

export default Switch;
