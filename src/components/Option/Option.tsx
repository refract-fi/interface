import { BorderButton, Text, Icon } from 'components';
import { useMemo } from 'react';
import { BoxProps, Flex } from 'theme/components';

interface OptionProps extends BoxProps {
  isSelected?: boolean;
  label: string;
  details?: string;
  variant?: 'detailed';
}

const Option = ({ isSelected, label, details, variant, ...restProps }: OptionProps) => {
  const { isDetailed } = useMemo(() => {
    return { isDetailed: variant === 'detailed' };
  }, [variant]);
  return (
    <BorderButton
      padding={isDetailed && !isSelected ? 'none' : 1}
      background={isSelected ? 'spectrum' : 'secondary'}
      size='none'
      {...restProps}
    >
      <Flex
        width={'full'}
        height='full'
        backgroundColor={isDetailed && !isSelected ? 'bg-primary-half' : 'bg-fill-quarter'}
        paddingX={isDetailed ? '4x' : '2x'}
        paddingY={isDetailed ? '2x' : '0x'}
        alignItems={'center'}
        gap={details ? '2x' : '0x'}
        justifyContent={'center'}
        flexDirection={details ? 'column' : 'row'}
      >
        <Text level='f4' weight='bold' color={isSelected ? 'white' : 'secondary'}>
          {label}
        </Text>
        {details && (
          <Text color='secondary' level='b3' height={'12x'}>
            {details}
          </Text>
        )}
        {isSelected && !isDetailed && <Icon name='check' fill='white' rotate='0deg' />}
      </Flex>
    </BorderButton>
  );
};

export default Option;
