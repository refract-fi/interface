import { BorderButton, Button, Icon, Text, Title } from 'components';
import { RefractPhases } from 'components/Refract/Refract';
import { useRouter } from 'next/router';
import { ReactNode, useCallback } from 'react';
import { useRefractActions } from 'states/refractState';
import { Box, Flex, FlexRow } from 'theme/components';
import * as styles from './RefractLayout.css';
interface RefractLayoutProps {
  children: ReactNode;
}

const RefractLayout = ({ children }: RefractLayoutProps) => {
  const { setAllocationFade, setStatsFade, setRefractFade, setRefractPhase, resetFades } =
    useRefractActions();
  const { pathname, push, query } = useRouter();

  const isActive = useCallback((route: string) => pathname.includes(route), [pathname]);

  const changeRoute = (route: string) =>
    push({ pathname: `/rid/[rid]/${route}`, query: { rid: query.rid } });

  const onRouteClick = (route: string) => {
    if (!isActive('allocations') && !isActive('stats') && route === 'allocations') {
      setRefractPhase(RefractPhases.leftSkew);
      setAllocationFade(true);
      const switchPage = setTimeout(async () => {
        await changeRoute(route);
        resetFades();
      }, 500);
      return () => clearTimeout(switchPage);
    }
    if (!isActive('allocations') && !isActive('stats') && route === 'stats') {
      setRefractPhase(RefractPhases.rightSkew);
      setStatsFade(true);
      const switchPage = setTimeout(async () => {
        await changeRoute(route);
        resetFades();
      }, 500);
      return () => clearTimeout(switchPage);
    }
    if (isActive('allocations') && route === '') {
      setRefractPhase(RefractPhases.default);
      setRefractFade(true);
      const switchPage = setTimeout(async () => {
        await changeRoute(route);
        resetFades();
      }, 500);
      return () => clearTimeout(switchPage);
    }
    if (isActive('stats') && route === '') {
      setRefractPhase(RefractPhases.default);
      setRefractFade(true);
      const switchPage = setTimeout(async () => {
        await changeRoute(route);
        resetFades();
      }, 500);
      return () => clearTimeout(switchPage);
    }
    changeRoute(route);
  };

  return (
    <Box>
      <FlexRow gap='2x' justifyContent={'center'} marginY='6x'>
        <Button size='none' position={'absolute'} left='7x' gap='2x' onClick={() => push('/')}>
          <Icon name='refract-logo' />
        </Button>
        <Button
          label='STATS'
          variant='nav'
          active={isActive('stats')}
          onClick={() => onRouteClick('stats')}
        />
        <Button
          label='REFRACT'
          variant='nav'
          active={!isActive('allocations') && !isActive('stats')}
          onClick={() => onRouteClick('')}
        />
        <Button
          label='ALLOCATIONS'
          variant='nav'
          active={isActive('allocations')}
          onClick={() => onRouteClick('allocations')}
        />

        <FlexRow position={'absolute'} gap='1x' right='7x'>
          <BorderButton
            textTransform={'uppercase'}
            label='create'
            right='7x'
            width='28x'
            level='f4'
            weight='bold'
            variant='secondary'
          />
          <BorderButton
            textTransform={'uppercase'}
            label='share'
            right='7x'
            width='28x'
            level='f4'
            weight='bold'
          />
        </FlexRow>
      </FlexRow>
      <Flex justifyContent={'center'} paddingTop='24x' className={styles.childWrapper}>
        {children}
      </Flex>
    </Box>
  );
};

export default RefractLayout;
