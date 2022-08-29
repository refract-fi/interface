import { AddressInput, Button, Text, Title } from 'components';
import { Layout } from 'layouts';
import { AdvancedForm } from 'modules/home';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ReactNode, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { formState, useFormActions } from 'states/formState';
import { FlexCol, FlexRow } from 'theme/components';
import { vars } from 'theme/vars.css';
import { IForm } from 'utils/types';
import { NextPageWithLayout } from './_app';
import Arrow from '/public/icons/arrow.svg';

const Home: NextPageWithLayout = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Head>
        <title>Refract</title>
      </Head>
      <FlexCol alignItems={'center'} marginTop='72x'>
        <Title level='0'>REFRACT</Title>
        <Title level='4' marginTop={'6x'} textTransform='uppercase'>
          Conceal your wealth, share your choices
        </Title>
        <AddressInput />
        <Button label='GENERATE YOUR REFRACT' variant='hero' marginTop='8x' />
        <Button color='secondary' marginTop={'7x'}>
          <FlexRow alignItems={'center'} gap='1x' onClick={() => setIsVisible(!isVisible)}>
            <Text level='f4' color={'secondary'}>
              ADVANCED PARAMETERS
            </Text>
            <Arrow stroke={vars.color.secondary} />
          </FlexRow>
        </Button>
        <AdvancedForm isVisible={isVisible} />
      </FlexCol>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Home;
