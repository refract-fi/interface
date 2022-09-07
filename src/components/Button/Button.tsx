import clsx from 'clsx';
import Text from 'components/Typography/Text';
import { weight } from 'components/Typography/typography.css';
import { ReactNode } from 'react';
import { Box, BoxProps } from 'theme/components';
import { Sprinkles } from 'theme/sprinkles.css';
import { text } from 'theme/vars.css';
import * as styles from './Button.css';

interface ButtonStyleProps {
  variant?: 'nav' | 'hero' | 'primary' | 'secondary' | 'tertiary' | 'text' | 'none';
  size?: 'medium' | 'large' | 'small' | 'none';
  disabled?: boolean;
}

interface ButtonProps extends BoxProps, ButtonStyleProps {
  label?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
  level?: keyof typeof text;
  children?: ReactNode;
  color?: Sprinkles['color'];
  fill?: Sprinkles['color'];
  weight?: keyof typeof weight;
  active?: boolean;
  fixedHeight?: Sprinkles['height'];
}

const useButtonStyles = ({ variant = 'primary', size = 'small', disabled }: ButtonStyleProps) =>
  clsx(styles.buttonVariants[variant], styles.buttonSizes[size], disabled && 'disabled');

const Button = ({
  variant = 'none',
  size,
  label,
  href,
  onClick,
  disabled,
  children,
  fill,
  fixedHeight,
  className,
  level = 'b2',
  active,
  background,
  color,
  ...restProps
}: ButtonProps) => {
  return (
    <Box
      className={clsx(active && styles.active, styles.buttonWrapperVariants[variant])}
      height={fixedHeight}
      background={background}
      fill={fill}
      {...restProps}
    >
      <Box
        component={href ? 'a' : 'button'}
        onClick={onClick}
        className={clsx(useButtonStyles({ variant, size, disabled }))}
        height='full'
        width='full'
      >
        {/* Improve text variants in buttons */}
        {label && (
          <Text level={variant === 'hero' ? 'f4' : level} color={color}>
            {label}
          </Text>
        )}
        {children && children}
      </Box>
    </Box>
  );
};

export default Button;
