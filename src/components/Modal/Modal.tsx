import Button from 'components/Button/Button';
import Icon, { iconNames } from 'components/Icon/Icon';
import { Title } from 'components/Typography/Title';
import { ReactNode } from 'react';
import { useModalActions } from 'states/modalState';
import { Box, Flex, FlexCol, FlexRow } from 'theme/components';
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
  isMobileFullscreen?: boolean;
  maxWidth?: Sprinkles['maxWidth'];
  saveLabel?: string;
  hideButtonsMD?: boolean;
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
  isMobileFullscreen,
  maxWidth = '104x',
  saveLabel,
  hideButtonsMD,
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
      <FlexCol
        backgroundColor={'bg-primary'}
        maxWidth={maxWidth}
        width={{ sm: isMobileFullscreen ? '100vw' : 'full', md: 'full' }}
        height={{ sm: isMobileFullscreen ? '100vh' : 'fit', md: 'fit' }}
        paddingY={'8x'}
        paddingX='5x'
        justifyContent={'space-between'}
      >
        <FlexCol height={{ sm: 'full', md: 'auto' }}>
          <FlexRow width={'full'} justifyContent='space-between' alignItems={'center'}>
            <FlexRow gap='0x' alignItems={'center'}>
              {icon && <Icon name={icon} color='white' />}
              {onReturn && (
                <Button onClick={() => onReturn()} size='none'>
                  <Icon name='chevron' color='white' rotate='90deg' />
                </Button>
              )}
              <Title level='6' textTransform={'uppercase'}>
                {title}
              </Title>
            </FlexRow>
            {onSave ? (
              <FlexRow gap='1x' display={{ sm: 'none', md: hideButtonsMD ? 'none' : 'flex' }}>
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
                  <Button
                    label='CANCEL'
                    onClick={() => onCancel && onCancel()}
                    color='primary'
                    display={{ sm: 'none', md: 'flex' }}
                  />
                ) : (
                  <Button
                    onClick={() => resetModalStatus()}
                    size='none'
                    alignItems={'center'}
                    display={{ sm: 'none', md: 'flex' }}
                  >
                    <Icon name='close' color='white' />
                  </Button>
                )}
              </>
            )}
          </FlexRow>
          {children}
        </FlexCol>
        <FlexCol display={{ sm: 'flex', md: 'none' }} marginTop='2x' marginBottom={'12x'} gap='2x'>
          {onCancel && (
            <Button
              label='CANCEL'
              onClick={() => onCancel && onCancel()}
              variant='tertiary'
              size='large'
            />
          )}
          {onSave && (
            <Button
              label={saveLabel ? saveLabel : 'SAVE'}
              variant='secondary'
              onClick={() => onSave()}
              size='large'
              disabled={saveDisabled}
            />
          )}
          {!onCancel && (
            <Button
              label={saveLabel ? saveLabel : 'OK'}
              variant='secondary'
              onClick={() => resetModalStatus()}
              size='large'
              disabled={saveDisabled}
            />
          )}
        </FlexCol>
      </FlexCol>
    </Flex>
  );
};

export default Modal;
