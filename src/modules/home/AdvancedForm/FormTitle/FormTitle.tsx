import { Box, FlexRow } from 'theme/components';
import Arrow from '/public/icons/arrow.svg';
import { Button, Switch, Text, Title } from 'components';
import { vars } from 'theme/vars.css';
import { ReactNode, useMemo } from 'react';
import * as styles from './FormTitle.css';
import { ModalStateType, useModalActions } from 'states/modalState';

interface FormTitleProps {
  title: string;
  icon: ReactNode;
  activeOption?: string;
  optionDetails?: string;
  variant?: 'group' | 'switch';
  toggled?: boolean;
  extend?: boolean;
  setExtend?: (extend: boolean) => void;
  setToggle?: (toggled: boolean) => void;
  percent?: number;
  setPercent?: (percent: number) => void;
  modal?: ModalStateType['visibleModal'];
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
        {icon}
        <Title level='6' textTransform={'uppercase'}>
          {title}
        </Title>
      </FlexRow>
      <FlexRow
        alignItems={'center'}
        gap='2x'
        cursor={isSwitch || isGroup || isModal ? 'auto' : 'pointer'}
        onClick={() => setExtend && setExtend(!extend)}
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
          <Text
            component={isModal ? 'button' : 'span'}
            color={isModal ? 'action' : 'primary'}
            cursor={isOther || isModal ? 'pointer' : 'auto'}
            weight='bold'
            level='f4'
            marginLeft={'0x'}
            onClick={() => isModal && modal && setVisibleModal(modal)}
          >
            {activeOption}
          </Text>
        </Text>
        {isOther && <Arrow stroke={vars.color.primary} />}
        {(isSwitch || isGroup) && (
          <Switch toggled={toggled} onClick={() => setToggle && setToggle(!toggled)} />
        )}
      </FlexRow>
    </FlexRow>
  );
};

export default FormTitle;
