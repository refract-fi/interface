import clsx from 'clsx';
import { useTextStyles } from 'components/Typography/Text';
import { Box, BoxProps } from 'theme/components';
import * as styles from './Input.css';

interface InputStyleProps {
  variant?: 'hero' | 'primary';
  size?: 'none' | 'large' | 'small';
}

interface InputProps extends BoxProps, InputStyleProps {
  label?: string;
  href?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
}

const useInputStyles = ({ variant = 'hero' }: InputStyleProps) =>
  clsx(variant === 'hero' && styles.inputVariants.hero);

const Input = ({ variant = 'primary', ...restProps }: InputProps) => {
  return (
    <Box className={styles.inputWrapperVariants[variant]}>
      <Box
        component='input'
        className={clsx(useInputStyles({ variant }), useTextStyles({ level: 'b1' }))}
        {...restProps}
      ></Box>
    </Box>
  );
};

export default Input;
