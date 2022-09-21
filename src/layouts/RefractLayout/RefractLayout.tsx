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
    push({ pathname: `/rid/[rid]/${route}`, query: { rid: query.rid } });

  return (
    <Box>
      <FlexRow gap='2x' justifyContent={'center'} marginY='6x'>
        <Button size='none' position={'absolute'} left='7x' gap='2x' onClick={() => push('/')}>
          <Icon name='refract-logo' />
        </Button>
        <Button
          label='REFRACT'
          variant='nav'
          active={!isActive('allocations') && !isActive('stats')}
          onClick={() => changeRoute('')}
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
      </FlexRow>
      <Flex justifyContent={'center'} paddingTop='24x' className={styles.childWrapper}>
        {children}
      </Flex>
    </Box>
  );
};

export default RefractLayout;
