import { Button, Chips, Input } from 'components';
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
        <Title level='4' marginTop={'6x'} textTransform='uppercase'>
          Conceal your wealth, share your choices
        </Title>
        <Input
          variant='hero'
          // placeholder='Enter single or multiple addresses'
          marginTop={'10x'}
        >
          {' '}
          <FlexRow gap='1x' marginX={'1x'}>
            <Chips label='0x2341...2309' background='blue' />
            <Chips label='refract.eth' background='green' />
            <Chips label='viktor.eth' background='red' />
          </FlexRow>
        </Input>
        <Button label='GENERATE YOUR REFRACT' variant='hero' marginTop='8x' />
      </FlexCol>
    </>
  );
};

export default Home;
