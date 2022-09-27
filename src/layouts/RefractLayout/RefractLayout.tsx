import clsx from 'clsx';
import { BorderButton, Button, Icon, Refract } from 'components';
import { useRouter } from 'next/router';
import { ReactNode, useCallback, useMemo, useState } from 'react';
import { refractPhaseState, useRefractPhaseActions } from 'states/refractPhaseState';
import { useRecoilValue } from 'recoil';
import { Box, Flex, FlexCol, FlexRow } from 'theme/components';
import * as styles from './RefractLayout.css';

interface RefractLayoutProps {
  children: ReactNode;
}

const RefractLayout = ({ children }: RefractLayoutProps) => {
  const { pathname, push, query } = useRouter();

  const isActive = useCallback((route: string) => pathname.includes(route), [pathname]);

  const changeRoute = (route: string) => {
    push({ pathname: `/rid/[rid]/${route}`, query: { rid: query.rid } });
  };

  const page = useMemo(() => {
    if (isActive('allocations')) {
      return 'allocations';
    } else if (isActive('stats')) {
      return 'stats';
    } else {
      return 'refract';
    }
  }, [isActive]);

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
          onClick={() => changeRoute('stats')}
        />
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
      <FlexCol paddingTop='24x' position={'relative'}>
        <Refract page={page} />
        <Flex justifyContent={'center'} className={clsx(styles.childWrapper, page)}>
          {children}
        </Flex>
      </FlexCol>
    </Box>
  );
};

export default RefractLayout;
