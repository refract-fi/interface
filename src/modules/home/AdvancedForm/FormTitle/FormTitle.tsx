import { Box, FlexRow } from 'theme/components';
import Arrow from '/public/icons/arrow.svg';
import { Button, Switch, Text, Title } from 'components';
import { vars } from 'theme/vars.css';
import { ReactNode, useMemo } from 'react';
import * as styles from './FormTitle.css';

interface FormTitleProps {
  title: string;
  icon: ReactNode;
  activeOption?: string;
  optionDetails?: string;
  variant?: 'group' | 'switch' | 'verify';
  toggled?: boolean;
  extend?: boolean;
  setExtend?: (extend: boolean) => void;
  setToggle?: (toggled: boolean) => void;
  percent?: number;
  setPercent?: (percent: number) => void;
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
}: FormTitleProps) => {
  const { isVerify, isGroup, isSwitch } = useMemo(() => {
    return {
      isVerify: variant === 'verify',
      isGroup: variant === 'group',
      isSwitch: variant === 'switch',
    };
  }, [variant]);

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
        cursor='pointer'
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
          <Text color='primary' weight='bold' level='f4' marginLeft={'0x'}>
            {activeOption}
          </Text>
        </Text>
        {!isVerify ? (
          !isGroup && !isSwitch && <Arrow stroke={vars.color.primary} />
        ) : (
          <Button variant='none' color='action' level='f4' label='VERIFY ADDRESSES' />
        )}
        {(isSwitch || isGroup) && (
          <Switch toggled={toggled} onClick={() => setToggle && setToggle(!toggled)} />
        )}
      </FlexRow>
    </FlexRow>
  );
};

export default FormTitle;
