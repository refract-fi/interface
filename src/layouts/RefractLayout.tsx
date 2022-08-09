import { Button } from 'components';
import { useRouter } from 'next/router';
import { ReactNode, useCallback } from 'react';
import { Box, FlexRow } from 'theme/components';

interface RefractLayoutProps {
  children: ReactNode;
}

const RefractLayout = ({ children }: RefractLayoutProps) => {
  const { pathname, push, query } = useRouter();

  const isActive = useCallback((route: string) => pathname.includes(route), [pathname]);

  const changeRoute = (route: string) =>
    push({ pathname: `/rfct/[refractId]/${route}`, query: { refractId: query.refractId } });

  return (
    <Box>
      <FlexRow gap='2x' justifyContent={'center'} marginY='6x'>
        <Button
          label='SPECTRUM'
          variant='nav'
          active={isActive('spectrum')}
          onClick={() => changeRoute('spectrum')}
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
        <Button label='NEW LINK' variant='primary' />
      </FlexRow>
      {children}
    </Box>
  );
};

export default RefractLayout;
