import axios from 'axios';
import { AddressInput, Button, Icon, Text, Title } from 'components';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { formPhaseState, useFormPhaseActions } from 'states/formPhasesState';
import { formState } from 'states/formState';
import { Box, Flex, FlexCol, FlexRow } from 'theme/components';
import { FormPhases } from 'utils/types/formPhase';
import AdvancedForm from './components/AdvancedForm/AdvancedForm';
import * as styles from './Landing.css';

interface LandingProps {
  fadeOut: (cb: () => void) => void;
  fadeIn: () => void;
  onGenerateClick: () => void;
}

const Landing = ({ fadeOut, fadeIn, onGenerateClick }: LandingProps) => {
  const { showParams } = useRecoilValue(formPhaseState);
  const { setPhase, setShowParams } = useFormPhaseActions();
  const form = useRecoilValue(formState);

  const isDisabled = useMemo(() => {
    return form.accounts.length < 1;
  }, [form.accounts]);
  return (
    <FlexCol alignItems={'center'} paddingTop={{ sm: '30x', md: '60x' }}>
      <Title special level={{ sm: '2', md: '0' }} weight={'bold'} className={styles.title}>
        REFRACT
      </Title>
      <Title
        level={{ sm: '6', md: '4' }}
        marginTop={{ sm: '4x', md: '6x' }}
        textTransform='uppercase'
      >
        Anonymize & Share
      </Title>
      <AddressInput />
      <Flex justifyContent={'center'} width={'full'} paddingX={{ sm: '2x', md: 'none' }}>
        <Button
          label='GENERATE YOUR REFRACT'
          variant='hero'
          marginTop='8x'
          size='large'
          onClick={async () => !isDisabled && (await onGenerateClick())}
          disabled={isDisabled}
          width={{ sm: 'full', md: 'auto' }}
        />
      </Flex>
      <Button marginTop={'7x'} color='secondary'>
        <FlexRow alignItems={'center'} gap='1x' onClick={() => setShowParams(!showParams)}>
          ADVANCED PARAMETERS
          <Icon
            name='chevron'
            color={'secondary'}
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
