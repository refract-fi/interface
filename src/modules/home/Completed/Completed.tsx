import { Button, Input, Text, Title } from 'components';
import { useRouter } from 'next/router';
import { Box, Flex, FlexCol } from 'theme/components';
import * as styles from './Completed.css';
import RefractLogo from '/public/brand/refract_logo.svg';

const Completed = () => {
  const { push } = useRouter();
  return (
    <Flex height={'100vh'} width='100vw' alignItems={'center'} justifyContent='center'>
      <FlexCol className={styles.refract} alignItems='center' paddingTop={'6x'} gap='3x'>
        <Box opacity={0.75}>
          <RefractLogo />
        </Box>
        <Title special textTransform={'uppercase'}>
          You&apos;ve been refracted
        </Title>
        <Title level='6' textTransform={'uppercase'}>
          share your refract with your friends
        </Title>
        <Input variant='hero' disabled width='116x' hideInput marginTop={'5x'}>
          <Flex
            width='full'
            justifyContent={'space-between'}
            height={'9x'}
            alignItems='center'
            padding='0x'
          >
            <Text component={'div'}>refract.fi/oskis-likes-cheese</Text>
            <Flex gap='2x' height={'full'}>
              <Button variant='tertiary' label='copy' level='f5' width='17x' />
              <Button variant='secondary' label='view' level='f5' width='17x' />
            </Flex>
          </Flex>
        </Input>
        <Button label='view' variant='secondary' onClick={() => push('/rfct/asdasd/refract')} />
      </FlexCol>
    </Flex>
  );
};

export default Completed;
