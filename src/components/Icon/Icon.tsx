import { Box, Flex } from 'theme/components';
import { Sprinkles } from 'theme/sprinkles.css';
import Hourglass from '/public/icons/hourglass.svg';
import Group from '/public/icons/group.svg';
import Multichain from '/public/icons/multichain.svg';
import NFT from '/public/icons/nft.svg';
import Snapshot from '/public/icons/snapshot.svg';
import Verified from '/public/icons/verified.svg';
import Arrow from '/public/icons/arrow.svg';
import Check from '/public/icons/check.svg';
import Checkmark from '/public/icons/checkmark.svg';
import Close from '/public/icons/close.svg';
import VerifiedChromatic from '/public/icons/verified-chromatic.svg';
import Binance from '/public/exchanges/binance.svg';
import Kraken from '/public/exchanges/kraken.svg';
import Coinbase from '/public/exchanges/coinbase.svg';
import Gemini from '/public/exchanges/Gemini.svg';

const standardIcons = {
  hourglass: <Hourglass />,
  group: <Group />,
  multichain: <Multichain />,
  nft: <NFT />,
  snapshot: <Snapshot />,
  verified: <Verified />,
  arrow: <Arrow />,
  check: <Check />,
  checkmark: <Checkmark />,
  close: <Close />,
  'verified-chromatic': <VerifiedChromatic />,
};

const exchangeIcons = {
  binance: <Binance />,
  gemini: <Gemini />,
  kraken: <Kraken />,
  coinbase: <Coinbase />,
};

const icons = { ...standardIcons, ...exchangeIcons };

export type iconNames = keyof typeof icons;

interface IconProps {
  name: iconNames;
  fill?: Sprinkles['color'];
  stroke?: Sprinkles['color'];
}

const Icon = ({ name, fill, stroke }: IconProps) => {
  return (
    <Flex fill={fill} stroke={stroke} alignItems='center' justifyContent={'center'}>
      {icons[name]}
    </Flex>
  );
};

export default Icon;
