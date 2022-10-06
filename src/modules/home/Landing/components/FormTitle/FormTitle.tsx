import { Box, FlexRow } from 'theme/components';
import Arrow from '/public/icons/arrow.svg';
import { Button, Icon, Switch, Text, Title } from 'components';
import { vars } from 'theme/vars.css';
import { useMemo } from 'react';
import * as styles from './FormTitle.css';
import { ModalStateType, useModalActions } from 'states/modalState';
import { IFormOption } from 'utils/types/form';

interface FormTitleProps extends IFormOption {
  variant?: 'group' | 'switch';
  toggled?: boolean;
  extend?: boolean;
  setExtend?: (extend: boolean) => void;
  setToggle?: (toggled: boolean) => void;
  percent?: number;
  setPercent?: (percent: number) => void;
  modal?: ModalStateType['visibleModal'];
  disabled?: boolean;
}

const FormTitle = ({
  title,
  icon,
  activeOption,
  optionDetails,
  variant,
  toggled = false,
  extend,
  setExtend,
  setToggle,
  percent,
  setPercent,
  modal,
  disabled,
}: FormTitleProps) => {
  const { isModal, isGroup, isSwitch, isOther } = useMemo(() => {
    return {
      isModal: modal,
      isGroup: variant === 'group',
      isSwitch: variant === 'switch',
      isOther: !modal && variant !== 'group' && variant !== 'switch',
    };
  }, [variant, modal]);

  const { setVisibleModal } = useModalActions();

  return (
    <FlexRow justifyContent={'space-between'}>
      <FlexRow gap='2x'>
        <Icon color={'white'} name={icon} />
        <Title level='6' textTransform={'uppercase'}>
          {title}
        </Title>
      </FlexRow>
      <FlexRow
        alignItems={'center'}
        cursor={isSwitch || isGroup || isModal ? 'auto' : 'pointer'}
        onClick={() => setExtend && setExtend(!extend)}
        gap='1x'
      >
        <Text color='secondary' level='b3'>
          {optionDetails}
          {setPercent && (
            <>
              <Box
                component={'input'}
                value={percent}
                type='number'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPercent(e.target.valueAsNumber)
                }
                className={styles.input}
              />
              <Text level='b3' color='primary' weight='bold' marginRight={'0x'}>
                %
              </Text>
              <Text level='b3'>will</Text>
            </>
          )}
        </Text>
        {(isOther || isModal) && (
          <Button
            color={isModal ? 'action' : 'primary'}
            cursor={isOther || isModal ? 'pointer' : 'auto'}
            weight='bold'
            level='f4'
            size='none'
            display='flex'
            gap='1x'
            alignItems={'center'}
            flexDirection={'row'}
            onClick={() => isModal && modal && !disabled && setVisibleModal(modal)}
            disabled={disabled}
          >
            {activeOption}
            {isOther && (
              <Icon
                name='chevron'
                color={'primary'}
                size={20}
                rotate={extend ? '0deg' : '180deg'}
              />
            )}
          </Button>
        )}
        {(isSwitch || isGroup) && (
          <Text
            color={'primary'}
            cursor={isOther || isModal ? 'pointer' : 'auto'}
            weight='bold'
            level='f4'
            display='flex'
            gap='1x'
            alignItems={'center'}
            flexDirection={'row'}
            onClick={() => isModal && modal && setVisibleModal(modal)}
          >
            {activeOption}
            <Switch toggled={toggled} onClick={() => setToggle && setToggle(!toggled)} />
          </Text>
        )}
      </FlexRow>
    </FlexRow>
  );
};

export default FormTitle;
