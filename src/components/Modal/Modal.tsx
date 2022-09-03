import Button from 'components/Button/Button';
import { Title } from 'components/Typography/Title';
import { ReactNode } from 'react';
import { useModalActions } from 'states/modalState';
import { Box, Flex, FlexRow } from 'theme/components';
import { Sprinkles } from 'theme/sprinkles.css';
import Close from '/public/icons/close.svg';

interface ModalProps {
  title: string;
  icon?: ReactNode;
  isVisible: boolean;
  children: ReactNode;
  onCancel?: Function;
  onSave?: () => void;
  maxWidth?: Sprinkles['maxWidth'];
}

const Modal = ({
  title,
  icon,
  isVisible,
  children,
  onSave,
  onCancel,
  maxWidth = '104x',
}: ModalProps) => {
  const { resetModalStatus } = useModalActions();
  return (
    <Flex
      width='100vw'
      height={'100vh'}
      position='fixed'
      backgroundColor={'overlay-ultrathin'}
      justifyContent='center'
      alignItems={'center'}
      top={0}
      display={isVisible ? 'flex' : 'none'}
    >
      <Box
        backgroundColor={'bg-primary'}
        maxWidth={maxWidth}
        width='full'
        height='fit'
        paddingY={'8x'}
        paddingX='5x'
      >
        <FlexRow width={'full'} justifyContent='space-between' alignItems={'center'}>
          <FlexRow gap='0x' alignItems={'center'}>
            {icon}
            <Title level='6' textTransform={'uppercase'}>
              {title}
            </Title>
          </FlexRow>
          {onSave ? (
            <FlexRow gap='1x'>
              <Button label='CANCEL' onClick={() => onCancel && onCancel()} />
              <Button label='SAVE' variant='secondary' onClick={() => onSave()} />
            </FlexRow>
          ) : (
            <Close stroke='white' />
          )}
        </FlexRow>
        {children}
      </Box>
    </Flex>
  );
};

export default Modal;
