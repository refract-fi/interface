import clsx from 'clsx';
import Button, { ButtonProps, useButtonStyles } from 'components/Button/Button';
import { useTextStyles } from 'components/Typography/Text';
import { Box } from 'theme/components';
import * as styles from './BorderButton.css';

interface BorderButtonProps extends ButtonProps {}

const BorderButton = ({
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
}: BorderButtonProps) => {
  return (
    <Box
      className={clsx(active && styles.active, styles.borderButtonVariants[variant])}
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
