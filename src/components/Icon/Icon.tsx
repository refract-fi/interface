import { Box, Flex } from 'theme/components';
import { Sprinkles } from 'theme/sprinkles.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import Hourglass from './icons/Hourglass';
import Group from './icons/Group';
import Multichain from './icons/Multichain';
import NFT from './icons/NFT';
import Snapshot from './icons/Snapshot';
import Verified from './icons/Verified';
import Chevron from './icons/Chevron';
import VerifiedChromatic from './icons/VerifiedChromatic';
import Close from './icons/Close';
import Check from './icons/Check';
import Gemini from './icons/Gemini';
import Binance from './icons/Binance';
import Kraken from './icons/Kraken';
import Coinbase from './icons/Coinbase';
import { rotation } from './Icon.css';
import RefractLogo from './icons/RefractLogo';
import * as styles from './Icon.css';
import Copy from './icons/Copy';
import Claimable from './icons/Claimable';
import Debt from './icons/Debt';
import Deposit from './icons/Deposit';
import Locked from './icons/Locked';
import Vesting from './icons/Vesting';
import Wallet from './icons/Wallet';

const standardIcons = {
  hourglass: <Hourglass />,
  group: <Group />,
  multichain: <Multichain />,
  nft: <NFT />,
  snapshot: <Snapshot />,
  verified: <Verified />,
  check: <Check />,
  close: <Close />,
  'verified-chromatic': <VerifiedChromatic />,
  chevron: <Chevron />,
  copy: <Copy />,
  claimable: <Claimable />,
  debt: <Debt />,
  deposit: <Deposit />,
  locked: <Locked />,
  vesting: <Vesting />,
  wallet: <Wallet />,
};

const brandIcons = {
  'refract-logo': <RefractLogo />,
};

const exchangeIcons = {
  binance: <Binance />,
  gemini: <Gemini />,
  kraken: <Kraken />,
  coinbase: <Coinbase />,
};

const icons = { ...standardIcons, ...exchangeIcons, ...brandIcons };

export type iconNames = keyof typeof icons;

interface IconProps {
  name: iconNames;
  color?: Sprinkles['color'];
  rotate?: '0deg' | '90deg' | '180deg' | '270deg';
  size?: number;
}

const Icon = ({ name, color, size, rotate = '0deg' }: IconProps) => {
  return (
    <Flex
      fill={color}
      stroke={color}
      alignItems='center'
      justifyContent={'center'}
      className={styles.rotate}
      style={assignInlineVars({ [rotation]: rotate })}
    >
      <svg
        width={size ? size : '24'}
        height={size ? size : '24'}
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        {icons[name]}
      </svg>
    </Flex>
  );
};

export default Icon;
