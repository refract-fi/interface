import clsx from 'clsx';
import Text, { useTextStyles } from 'components/Typography/Text';
import { weight } from 'components/Typography/typography.css';
import { ReactNode } from 'react';
import { Box, BoxProps } from 'theme/components';
import { Sprinkles } from 'theme/sprinkles.css';
import { text } from 'theme/vars.css';
import * as styles from './Button.css';

interface ButtonStyleProps {
  variant?:
    | 'nav'
    | 'hero'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'text'
    | 'none'
    | 'exchange'
    | 'inline';
  size?: 'medium' | 'large' | 'small' | 'none';
  disabled?: boolean;
}

export interface ButtonProps extends BoxProps, ButtonStyleProps {
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

export const useButtonStyles = ({
  variant = 'primary',
  size = 'small',
  disabled,
}: ButtonStyleProps) =>
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
  weight,
  ...restProps
}: ButtonProps) => {
  return (
    <Box
      component={href ? 'a' : variant === 'inline' ? 'span' : 'button'}
      onClick={onClick}
      className={clsx(
        useButtonStyles({ variant, size, disabled }),
        useTextStyles({ level, color, weight })
      )}
      {...restProps}
    >
      {label}
      {children}
    </Box>
  );
};

export default Button;
