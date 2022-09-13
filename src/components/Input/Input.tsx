import clsx from 'clsx';
import { useTextStyles } from 'components/Typography/Text';
import { ReactNode } from 'react';
import { Box, BoxProps } from 'theme/components';
import { text } from 'theme/vars.css';
import * as styles from './Input.css';

interface InputStyleProps {
  variant?: 'hero' | 'primary';
  size?: 'none' | 'medium' | 'large';
}

export interface InputProps extends BoxProps, InputStyleProps {
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
  placeholder?: string;
  children?: ReactNode;
  hideInput?: boolean;
  level?: keyof typeof text;
}

const useInputStyles = ({ variant = 'hero', size = 'none' }: InputStyleProps) =>
  clsx(styles.inputVariants[variant], styles.inputSizeVariants[size]);

const Input = ({
  variant = 'primary',
  placeholder,
  children,
  value,
  onChange,
  disabled,
  size = 'none',
  level = 'b1',
  hideInput,
  ...restProps
}: InputProps) => {
  return (
    <Box
      component='input'
      value={value}
      onChange={onChange}
      className={clsx(useInputStyles({ variant, size }), useTextStyles({ level: level }))}
      placeholder={placeholder}
      disabled={disabled}
      display={hideInput ? 'none' : 'block'}
      {...restProps}
    />
  );
};

export default Input;
