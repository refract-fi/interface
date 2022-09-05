import { Box } from 'theme/components';
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

const icons = {
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

export type iconNames = keyof typeof icons;

interface IconProps {
  name: iconNames;
  fill?: Sprinkles['color'];
  stroke?: Sprinkles['color'];
}

const Icon = ({ name, fill, stroke }: IconProps) => {
  return (
    <Box fill={fill} stroke={stroke}>
      {icons[name]}
    </Box>
  );
};

export default Icon;
