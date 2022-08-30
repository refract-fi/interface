import clsx from 'clsx';
import Text from 'components/Typography/Text';
import { weight } from 'components/Typography/typography.css';
import { ReactNode } from 'react';
import { Box, BoxProps } from 'theme/components';
import { Sprinkles } from 'theme/sprinkles.css';
import { text, vars } from 'theme/vars.css';
import * as styles from './Button.css';

interface ButtonStyleProps {
  variant?: 'nav' | 'hero' | 'primary' | 'secondary' | 'none';
  size?: 'medium' | 'large' | 'small' | 'none';
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
  fixedHeight?: Sprinkles['height'];
}

const useButtonStyles = ({ variant = 'primary', size = 'small' }: ButtonStyleProps) =>
  clsx(
    variant === 'primary' && styles.buttonVariants.primary,
    variant === 'secondary' && styles.buttonVariants.secondary,
    variant === 'hero' && styles.buttonVariants.hero,
    variant === 'nav' && styles.buttonVariants.nav,
    variant === 'none' && styles.buttonVariants.none,
    size === 'small' && styles.buttonSizes.small,
    size === 'medium' && styles.buttonSizes.medium,
    size === 'large' && styles.buttonSizes.large
  );

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
        className={clsx(useButtonStyles({ variant, size }))}
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
