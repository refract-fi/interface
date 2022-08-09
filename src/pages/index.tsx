import { Button, Input } from 'components';
import { Title } from 'components/Typography/Title';
import type { NextPage } from 'next';
import Head from 'next/head';
import { FlexCol, FlexRow } from 'theme/components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Refract</title>
      </Head>
      <FlexRow gap='2x' justifyContent={'center'} marginY='6x'>
        <Button label='REFRACT' variant='nav' active />
        <Button label='INFO' variant='nav' />
        <Button label='DOCS' variant='nav' />
      </FlexRow>
      <FlexCol alignItems={'center'} marginTop='48x'>
        <Title level='0'>REFRACT</Title>
        <Title level='4' marginTop={'6x'}>
          Conceal your wealth, share your choices
        </Title>
        <Input variant='hero' placeholder='0x... or ENS name' marginTop={'10x'} />
        <Button label='REFRACT' variant='hero' marginTop='8x' />
      </FlexCol>
    </>
  );
};

export default Home;
