import { AddressInput, Button, Modal, Text, Title } from 'components';
import { Layout } from 'layouts';
import { AdvancedForm } from 'modules/home';
import Head from 'next/head';
import { ReactNode, useState } from 'react';
import { useModalActions } from 'states/modalState';
import { FlexCol, FlexRow } from 'theme/components';
import { vars } from 'theme/vars.css';
import { NextPageWithLayout } from './_app';
import Arrow from '/public/icons/arrow.svg';
import Multichain from '/public/icons/multichain.svg';

const Home: NextPageWithLayout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isModalVisible, setVisibleModal } = useModalActions();

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
        <Button label='GENERATE YOUR REFRACT' variant='hero' marginTop='8x' size='large' />
        <Button color='secondary' marginTop={'7x'}>
          <FlexRow alignItems={'center'} gap='1x' onClick={() => setIsVisible(!isVisible)}>
            <Text level='f4' color={'secondary'}>
              ADVANCED PARAMETERS
            </Text>
            <Arrow stroke={vars.color.secondary} />
          </FlexRow>
        </Button>
        <AdvancedForm isVisible={isVisible} />
        <Button label='test' onClick={() => setVisibleModal('CHAIN_SELECT')} />
        <Modal
          title={'CHAIN SELECT'}
          icon={<Multichain />}
          // isVisible={isModalVisible('CHAIN_SELECT')}
          isVisible
          hasSave
        ></Modal>
      </FlexCol>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Home;
