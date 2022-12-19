import { BorderButton, Button, Input, Text, Title } from 'components';
import BorderInput from 'components/BorderInput/BorderInput';
import { useRouter } from 'next/router';
import { Box, Flex, FlexCol } from 'theme/components';
import * as styles from './Completed.css';
import RefractLogo from '/public/brand/refract_logo.svg';
import { useFormPhaseActions } from 'states/formPhasesState';

const Completed = () => {
  const { push } = useRouter();
  const { resetFormPhase } = useFormPhaseActions();
  return (
    <FlexCol
      className={styles.refract}
      alignItems='center'
      justifyContent='center'
      paddingBottom={'60x'}
      gap='3x'
    >
      <Title special textTransform={'uppercase'}>
        You&apos;ve been refracted
      </Title>
      <Title level='6' textTransform={'uppercase'}>
        share your refract
      </Title>
      <BorderInput
        variant='hero'
        disabled
        width='116x'
        hideInput
        marginTop={'5x'}
        background='spectrum'
      >
        <Flex
          width='full'
          justifyContent={'space-between'}
          height={'9x'}
          alignItems='center'
          padding='0x'
        >
          <Text component={'div'}>refract.fi/rid/a90idfgiajks</Text>
          <Flex gap='2x' height={'full'}>
            <BorderButton textTransform={'uppercase'} label='copy' weight='bold' width={'17x'} />
            <Button
              variant='secondary'
              label='view'
              level='f5'
              width='17x'
              onClick={async () => {
                await push('/rid/a90idfgiajks');
                resetFormPhase();
              }}
            />
          </Flex>
        </Flex>
      </BorderInput>
    </FlexCol>
  );
};

export default Completed;
