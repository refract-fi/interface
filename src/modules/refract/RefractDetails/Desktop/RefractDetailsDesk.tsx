import clsx from 'clsx';
import { Text } from 'components';
import { Box, FlexCol, FlexRow } from 'theme/components';
import { AppBalance, AppBalances, Token } from 'utils/types/refractData';
import * as styles from './RefractDetailsDesk.css';

interface RefractDetailsDeskProps {
  apps: AppBalances;
  token: Token;
  percentage: number;
}

const RefractDetailsDesk = ({ apps, percentage, token }: RefractDetailsDeskProps) => {
  return (
    <Box display={{ sm: 'none', md: 'block' }}>
      {' '}
      <FlexRow>
        {apps &&
          apps.length > 0 &&
          apps.map((app: AppBalance) => (
            <Box
              key={`${app.name}-${token.id}-${app.percentage}}`}
              component='span'
              className={clsx(styles.assetBlock, 'assetBlock')}
              height={'2x'}
              style={{ width: `${(app.percentage / percentage) * 100}%` }}
              marginRight={'0x'}
            />
          ))}
      </FlexRow>
      <FlexCol alignItems={'center'} marginTop='2x'>
        <Text level='f3'>{percentage.toFixed(2)}%</Text>
        <Text marginTop='1x' marginBottom={'0x'} level='b3'>
          {token.name}
        </Text>
        <Text level='b4' color='secondary'>
          click to view details
        </Text>
      </FlexCol>
    </Box>
  );
};

export default RefractDetailsDesk;
