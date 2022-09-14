import { Button } from 'components';
import { useRouter } from 'next/router';
import { ReactNode, useCallback } from 'react';
import { Box, Flex, FlexRow } from 'theme/components';
import * as styles from './RefractLayout.css';

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
        {/* <Button label='NEW LINK' variant='primary' /> */}
      </FlexRow>
      <Flex justifyContent={'center'} paddingTop='12x' className={styles.childWrapper}>
        {children}
      </Flex>
    </Box>
  );
};

export default RefractLayout;
