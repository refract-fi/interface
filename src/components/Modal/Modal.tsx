import Button from 'components/Button/Button';
import Icon, { iconNames } from 'components/Icon/Icon';
import { Title } from 'components/Typography/Title';
import { ReactNode } from 'react';
import { useModalActions } from 'states/modalState';
import { Box, Flex, FlexRow } from 'theme/components';
import { Sprinkles } from 'theme/sprinkles.css';
import Close from '/public/icons/close.svg';

interface ModalProps {
  title: string;
  icon?: iconNames;
  isVisible: boolean;
  children: ReactNode;
  onCancel?: Function | null;
  onReturn?: Function | null;
  onSave?: () => void;
  saveDisabled?: boolean;
  maxWidth?: Sprinkles['maxWidth'];
}

const Modal = ({
  title,
  icon,
  isVisible,
  children,
  onSave,
  onReturn,
  onCancel,
  saveDisabled,
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
      top={'0'}
      display={isVisible ? 'flex' : 'none'}
      zIndex={4}
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
            {icon && <Icon name={icon} stroke='white' />}
            {onReturn && (
              <Button onClick={() => onReturn()} size='none'>
                <Icon name='chevron' stroke='white' rotate='90deg' />
              </Button>
            )}
            <Title level='6' textTransform={'uppercase'}>
              {title}
            </Title>
          </FlexRow>
          {!onReturn &&
            (onSave ? (
              <FlexRow gap='1x'>
                {onCancel && (
                  <Button label='CANCEL' onClick={() => onCancel && onCancel()} color='primary' />
                )}
                <Button
                  label='SAVE'
                  variant='secondary'
                  onClick={() => onSave()}
                  disabled={saveDisabled}
                />
              </FlexRow>
            ) : (
              <>
                {onCancel ? (
                  <Button label='CANCEL' onClick={() => onCancel && onCancel()} color='primary' />
                ) : (
                  <Button
                    onClick={() => resetModalStatus()}
                    size='none'
                    alignItems={'center'}
                    display='flex'
                  >
                    <Icon name='close' stroke='white' />
                  </Button>
                )}
              </>
            ))}
        </FlexRow>
        {children}
      </Box>
    </Flex>
  );
};

export default Modal;
