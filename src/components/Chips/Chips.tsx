import Text from 'components/Typography/Text';
import { Box, FlexRow } from 'theme/components';
import Close from '/public/icons/close.svg';
import { vars } from 'theme/vars.css';
import Button from 'components/Button/Button';
import Icon from 'components/Icon/Icon';

interface ChipsProps {
  label: string;
  isLocked?: boolean;
  onClear?: Function;
  isVerified?: boolean;
  invisibleLabel?: boolean;
  background: keyof typeof vars.background;
}

const Chips = ({
  label,
  isLocked,
  onClear,
  isVerified,
  background,
  invisibleLabel,
}: ChipsProps) => {
  return (
    <Box padding={1} background={background} height='fit'>
      <FlexRow
        width='full'
        height={'full'}
        backgroundColor='black'
        paddingY={'0x'}
        paddingX='1x'
        alignItems='center'
      >
        <Text level='b1' opacity={invisibleLabel ? 0 : 1}>
          {label}
        </Text>
        {!isLocked && (
          <Button
            display='flex'
            marginLeft={'1x'}
            variant='none'
            size='none'
            fixedHeight={'icon'}
            onClick={() => onClear && onClear()}
          >
            <Icon name='close' stroke={'primary'} />
          </Button>
        )}
      </FlexRow>
    </Box>
  );
};

export default Chips;
