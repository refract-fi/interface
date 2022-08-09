import clsx from 'clsx';
import Text from 'components/Typography/Text';
import { weight } from 'components/Typography/typography.css';
import { ReactNode } from 'react';
import { Box, BoxProps } from 'theme/components';
import { Sprinkles } from 'theme/sprinkles.css';
import { text } from 'theme/vars.css';
import * as styles from './Button.css';

interface ButtonStyleProps {
  variant?: 'nav' | 'hero' | 'primary';
  size?: 'none' | 'large' | 'small';
}

interface ButtonProps extends BoxProps, ButtonStyleProps {
  label?: string;
  href?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
  level?: keyof typeof text;
  children?: ReactNode;
  color?: Sprinkles['color'];
  fill?: Sprinkles['color'];
  weight?: keyof typeof weight;
  active?: boolean;
}

const useButtonStyles = ({ variant = 'primary' }: ButtonStyleProps) =>
  clsx(
    variant === 'primary' && styles.buttonVariants.primary,
    variant === 'hero' && styles.buttonVariants.hero,
    variant === 'nav' && styles.buttonVariants.nav
  );

const Button = ({
  variant = 'primary',
  size,
  label,
  href,
  onClick,
  disabled,
  children,
  fill,
  width,
  className,
  level = 'b2',
  active,
  ...restProps
}: ButtonProps) => {
  return (
    <Box className={clsx(active && styles.active, styles.buttonWrapperVariants[variant])}>
      <Box
        component={href ? 'a' : 'button'}
        onClick={onClick}
        {...restProps}
        className={clsx(useButtonStyles({ variant }))}
      >
        {/* Improve text variants in buttons */}
        {label && <Text level={variant === 'hero' ? 'f4' : level}>{label}</Text>}
        {children && <Box fill={fill}>{children}</Box>}
      </Box>
    </Box>
  );
};

export default Button;
