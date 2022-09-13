import clsx from 'clsx';
import Input, { InputProps } from 'components/Input/Input';
import { Box, FlexRow } from 'theme/components';
import * as styles from './BorderInput.css';

const BorderInput = ({
  variant = 'primary',
  children,
  value,
  onChange,
  placeholder,
  disabled,
  hideInput,
  ...restProps
}: InputProps) => {
  return (
    <Box className={clsx(styles.BorderInputVariants[variant])} {...restProps}>
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
        <Input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          hideInput={hideInput}
          variant={variant}
        />
      </FlexRow>
    </Box>
  );
};

export default BorderInput;
