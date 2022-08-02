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
      <FlexRow gap='2x'>
        <Button label='REFRACT' variant='nav' active />
        <Button label='INFO' variant='nav' />
        <Button label='DOCS' variant='nav' />
      </FlexRow>
      <FlexCol>
        <Title>REFRACT</Title>
        <Input variant='hero' placeholder='0x... or ENS name' />
        <Button label='REFRACT' variant='hero' />
      </FlexCol>
    </>
  );
};

export default Home;
