import { AddressInput, Button, Icon, Text, Title } from 'components';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { formPhaseState, useFormPhaseActions } from 'states/formPhasesState';
import { formState } from 'states/formState';
import { FlexCol, FlexRow } from 'theme/components';
import { FormPhases } from 'utils/types/formPhase';
import AdvancedForm from './components/AdvancedForm/AdvancedForm';
import * as styles from './Landing.css';

interface LandingProps {
  fadeOut: (cb: () => void) => void;
  fadeIn: () => void;
}

const Landing = ({ fadeOut, fadeIn }: LandingProps) => {
  const { showParams } = useRecoilValue(formPhaseState);
  const { setPhase, setShowParams } = useFormPhaseActions();
  const { accounts } = useRecoilValue(formState);
  const onGenerateClick = () => {
    setTimeout(() => setPhase(FormPhases.REVIEW), 150);
    fadeOut(() => setTimeout(() => fadeIn(), 150));
  };

  const isDisabled = useMemo(() => {
    return accounts.length < 1;
  }, [accounts]);
  return (
    <FlexCol alignItems={'center'} marginTop='60x'>
      <Title special level='0' weight={'bold'} className={styles.title}>
        REFRACT
      </Title>
      <Title level='4' marginTop={'6x'} textTransform='uppercase'>
        Anonymize & Share
      </Title>
      <AddressInput />
      <Button
        label='GENERATE YOUR REFRACT'
        variant='hero'
        marginTop='8x'
        size='large'
        onClick={() => !isDisabled && onGenerateClick()}
        disabled={isDisabled}
      />
      <Button marginTop={'7x'} color='secondary'>
        <FlexRow alignItems={'center'} gap='1x' onClick={() => setShowParams(!showParams)}>
          ADVANCED PARAMETERS
          <Icon
            name='chevron'
            stroke={'secondary'}
            size={20}
            rotate={showParams ? '0deg' : '180deg'}
          />
        </FlexRow>
      </Button>
      <AdvancedForm isVisible={showParams} />
      <FlexRow
        alignItems={'center'}
        gap='1x'
        color='secondary'
        position={'absolute'}
        bottom='4x'
        display={showParams ? 'none' : 'flex'}
      >
        <Text level='b3'>Powered by</Text>
        <img src='/brand/zapper_logo.svg' />
      </FlexRow>
    </FlexCol>
  );
};

export default Landing;
