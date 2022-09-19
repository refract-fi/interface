import clsx from 'clsx';
import Button, { ButtonProps, useButtonStyles } from 'components/Button/Button';
import { Box } from 'theme/components';
import * as styles from './BorderButton.css';

interface BorderButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: 'option' | 'default';
}

const BorderButton = ({
  variant = 'default',
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
}: BorderButtonProps) => {
  return (
    <Box
      className={clsx(active && 'active', styles.borderButtonVariants[variant])}
      height={fixedHeight}
      background={background}
      fill={fill}
      {...restProps}
    >
      <Button variant='none' onClick={onClick} width='full' height={'full'} size={size}>
        {children}
      </Button>
    </Box>
  );
};

export default BorderButton;
