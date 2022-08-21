import { FlexRow } from 'theme/components';
import Arrow from '/public/icons/arrow.svg';
import { Button, Switch, Text, Title } from 'components';
import { vars } from 'theme/vars.css';
import { ReactNode, useMemo } from 'react';

interface FormTitleProps {
  title: string;
  icon: ReactNode;
  activeOption?: string;
  optionDetails?: string;
  variant?: 'group' | 'switch' | 'verify';
}

const FormTitle = ({ title, icon, activeOption, optionDetails, variant }: FormTitleProps) => {
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
      <FlexRow alignItems={'center'} gap='2x'>
        <Text color='secondary' level='b3'>
          {optionDetails}{' '}
          <Text color='primary' weight='bold' level='f4'>
            {activeOption}
          </Text>
        </Text>
        {!isVerify ? (
          !isGroup && !isSwitch && <Arrow stroke={vars.color.primary} />
        ) : (
          <Button variant='none' color='action' level='f4' label='VERIFY ADDRESSES' />
        )}
        {(isSwitch || isGroup) && <Switch isChecked={true} />}
      </FlexRow>
    </FlexRow>
  );
};

export default FormTitle;
