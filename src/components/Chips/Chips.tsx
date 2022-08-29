import Text from 'components/Typography/Text';
import { Box, FlexRow } from 'theme/components';
import Close from '/public/icons/close.svg';
import { vars } from 'theme/vars.css';
import Button from 'components/Button/Button';

interface ChipsProps {
  label: string;
  isLocked?: boolean;
  onClear: Function;
  isVerified?: boolean;
  background: keyof typeof vars.background;
}

const Chips = ({ label, isLocked, onClear, isVerified, background }: ChipsProps) => {
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
        <Text level='b1'>{label}</Text>
        {!isLocked && (
          <Button marginLeft={'1x'} variant='none' fixedHeight={'icon'} onClick={() => onClear()}>
            <Close stroke={vars.color.white} />
          </Button>
        )}
      </FlexRow>
    </Box>
  );
};

export default Chips;
