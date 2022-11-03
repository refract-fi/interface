import clsx from 'clsx';
import { BorderButton, Button, Icon, Refract, RefractLogoButton, Text, Title } from 'components';
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
      <Flex
        gap='2x'
        justifyContent={{ sm: 'space-between', md: 'center' }}
        paddingX={{ sm: '3x', md: 'none' }}
        paddingY={{ sm: '3x', md: '6x' }}
        position={'sticky'}
        top={'0'}
        backgroundColor='black'
        zIndex={2}
        flexWrap='wrap'
      >
        <FlexRow alignItems={'center'} gap='1x'>
          <RefractLogoButton
            position={{ md: 'absolute' }}
            left='7x'
            onClick={() => push('/')}
            size={{ sm: '5x', md: '7x' }}
          />
          <Title
            level='6'
            special
            weight='bold'
            textTransform={'uppercase'}
            className={styles.title}
            display={{ sm: 'block', md: 'none' }}
          >
            Refract
          </Title>
        </FlexRow>
        <FlexRow
          order={{ sm: 2, lg: 0 }}
          component='nav'
          position={{ sm: 'static', lg: 'absolute' }}
          width={{ sm: 'full', lg: 'auto' }}
        >
          <Button
            label='stats'
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
        </FlexRow>
        <FlexRow
          position={{ sm: 'static', lg: 'absolute' }}
          gap='1x'
          right='7x'
          order={{ sm: 0, lg: 2 }}
        >
          <BorderButton
            textTransform={'uppercase'}
            label='create'
            right='7x'
            width='28x'
            level='f4'
            weight='bold'
            variant='secondary'
            display={{ sm: 'none', md: 'block' }}
          />
          <BorderButton
            textTransform={'uppercase'}
            label='share'
            right='7x'
            width={{ sm: '20x', md: '28x' }}
            level='f4'
            weight='bold'
          />
        </FlexRow>
      </Flex>
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
