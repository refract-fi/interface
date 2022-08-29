import clsx from 'clsx';
import { useTextStyles } from 'components/Typography/Text';
import { ReactNode } from 'react';
import { Box, BoxProps, FlexRow } from 'theme/components';
import * as styles from './Input.css';

interface InputStyleProps {
  variant?: 'hero' | 'primary';
  size?: 'none' | 'large' | 'small';
}

interface InputProps extends BoxProps, InputStyleProps {
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
  placeholder?: string;
  children?: ReactNode;
}

const useInputStyles = ({ variant = 'hero' }: InputStyleProps) =>
  clsx(variant === 'hero' && styles.inputVariants.hero);

const Input = ({
  variant = 'primary',
  placeholder,
  children,
  value,
  onChange,
  ...restProps
}: InputProps) => {
  return (
    <Box className={styles.inputWrapperVariants[variant]} {...restProps}>
      <FlexRow
        width='full'
        height='full'
        backgroundColor={'black'}
        alignItems='center'
        flexWrap={'wrap'}
        gap='1x'
        paddingX={'1x'}
        paddingY='1x'
      >
        {children}
        <Box
          component='input'
          value={value}
          onChange={onChange}
          className={clsx(useInputStyles({ variant }), useTextStyles({ level: 'b1' }))}
          placeholder={placeholder}
        />
      </FlexRow>
    </Box>
  );
};

export default Input;
