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
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
  placeholder?: string;
}

const useInputStyles = ({ variant = 'hero' }: InputStyleProps) =>
  clsx(variant === 'hero' && styles.inputVariants.hero);

const Input = ({ variant = 'primary', placeholder, ...restProps }: InputProps) => {
  return (
    <Box className={styles.inputWrapperVariants[variant]} {...restProps}>
      <Box
        component='input'
        className={clsx(useInputStyles({ variant }), useTextStyles({ level: 'b1' }))}
        placeholder={placeholder}
      ></Box>
    </Box>
  );
};

export default Input;
