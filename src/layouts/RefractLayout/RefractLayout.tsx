import { BorderButton, Button, Icon, Text, Title } from 'components';
import { useRouter } from 'next/router';
import { ReactNode, useCallback } from 'react';
import { Box, Flex, FlexRow } from 'theme/components';
import * as styles from './RefractLayout.css';
import RefractLogo from '/public/brand/refract_logo.svg';
interface RefractLayoutProps {
  children: ReactNode;
}

const RefractLayout = ({ children }: RefractLayoutProps) => {
  const { pathname, push, query } = useRouter();
  const router = useRouter();

  const isActive = useCallback((route: string) => pathname.includes(route), [pathname]);

  const changeRoute = (route: string) =>
    push({ pathname: `/rfct/[rfctId]/${route}`, query: { rfctId: query.rfctId } });

  return (
    <Box>
      <FlexRow gap='2x' justifyContent={'center'} marginY='6x'>
        <Flex position={'absolute'} left='7x' gap='2x'>
          <Icon name='refract-logo' />
          <Title level='4' special weight='bold' className={styles.title}>
            REFRACT
          </Title>
        </Flex>
        <Button
          label='REFRACT'
          variant='nav'
          active={isActive('refract')}
          onClick={() => changeRoute('refract')}
        />
        <Button
          label='ALLOCATIONS'
          variant='nav'
          active={isActive('allocations')}
          onClick={() => changeRoute('allocations')}
        />
        <Button
          label='STATS'
          variant='nav'
          active={isActive('stats')}
          onClick={() => changeRoute('stats')}
        />
        <BorderButton
          padding={1}
          size='none'
          background='spectrum'
          position={'absolute'}
          right='7x'
        >
          <Flex
            width='full'
            height='full'
            backgroundColor={'black'}
            alignItems='center'
            paddingX='5x'
            paddingY='0x'
          >
            <Text level='f4' weight='bold' className={styles.textGradient}>
              CREATE NEW REFRACT
            </Text>
          </Flex>
        </BorderButton>
      </FlexRow>
      <Flex justifyContent={'center'} paddingTop='12x' className={styles.childWrapper}>
        {children}
      </Flex>
    </Box>
  );
};

export default RefractLayout;
