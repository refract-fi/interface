import { Checkbox } from 'components';
import Button from 'components/Button/Button';
import { Title } from 'components/Typography/Title';
import { ReactNode } from 'react';
import { useModalActions } from 'states/modalState';
import { Box, Flex, FlexRow } from 'theme/components';
import * as styles from './Modal.css';
import Close from '/public/icons/close.svg';

interface ModalProps {
  title: string;
  icon?: ReactNode;
  isVisible: boolean;
  children: ReactNode;
  onCancel?: Function;
  hasSave?: boolean;
}

const Modal = ({ title, icon, isVisible, children, hasSave, onCancel }: ModalProps) => {
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
      <Box backgroundColor={'bg-primary'} className={styles.modalWrapper}>
        <FlexRow width={'full'} justifyContent='space-between' alignItems={'center'}>
          <FlexRow gap='0x' alignItems={'center'}>
            {icon}
            <Title level='6' textTransform={'uppercase'}>
              {title}
            </Title>
          </FlexRow>
          {hasSave ? (
            <FlexRow gap='1x'>
              <Button label='CANCEL' onClick={() => onCancel && onCancel()} />
              <Button label='SAVE' variant='secondary' onClick={() => resetModalStatus()} />
            </FlexRow>
          ) : (
            <Close stroke='white' />
          )}
        </FlexRow>
        <Checkbox />
        {children}
      </Box>
    </Flex>
  );
};

export default Modal;
