import { AddressInput, Button, Icon, Text, Title } from 'components';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { formPhaseState, useFormPhaseActions } from 'states/formPhasesState';
import { FlexCol, FlexRow } from 'theme/components';
import { FormPhases } from 'utils/types/formPhase';
import AdvancedForm from './components/AdvancedForm/AdvancedForm';

interface LandingProps {
  fadeOut: (cb: () => void) => void;
  fadeIn: () => void;
}

const Landing = ({ fadeOut, fadeIn }: LandingProps) => {
  const { showParams } = useRecoilValue(formPhaseState);
  const { setPhase, setShowParams } = useFormPhaseActions();
  const onGenerateClick = () => {
    setTimeout(() => setPhase(FormPhases.GENERATING), 150);
    fadeOut(() => setTimeout(() => fadeIn(), 150));
  };
  return (
    <FlexCol alignItems={'center'} marginTop='72x'>
      <Title level='0'>REFRACT</Title>
      <Title level='4' marginTop={'6x'} textTransform='uppercase'>
        Conceal your wealth, share your choices
      </Title>
      <AddressInput />
      <Button
        label='GENERATE YOUR REFRACT'
        variant='hero'
        marginTop='8x'
        size='large'
        onClick={() => onGenerateClick()}
      />
      <Button color='secondary' marginTop={'7x'}>
        <FlexRow alignItems={'center'} gap='1x' onClick={() => setShowParams(!showParams)}>
          <Text level='f4' color={'secondary'}>
            ADVANCED PARAMETERS
          </Text>
          <Icon name='arrow' stroke={'secondary'} />
        </FlexRow>
      </Button>
      <AdvancedForm isVisible={showParams} />
    </FlexCol>
  );
};

export default Landing;
