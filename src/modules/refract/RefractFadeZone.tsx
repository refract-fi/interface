import clsx from 'clsx';
import { Button, Icon, Text } from 'components';
import { RefractPhases } from 'components/Refract/Refract';
import { useRecoilValue } from 'recoil';
import { refractState, useRefractActions } from 'states/refractState';
import { Box, FlexCol, FlexRow } from 'theme/components';
import * as styles from './index.css';
import RefractBlock from './RefractBlock/RefractBlock';

const RefractFadeZone = () => {
  const { setRefractPhase } = useRefractActions();
  const { allocationFade, statsFade } = useRecoilValue(refractState);
  return (
    <FlexCol
      width='full'
      marginTop={'12x'}
      gap='4x'
      className={clsx((allocationFade || statsFade) && styles.fadeOutAnim)}
    >
      <FlexRow gap='2x' width={'full'} justifyContent='space-between'>
        <FlexRow alignItems={'center'} gap='0x'>
          <Icon name='verified-chromatic' />
          <Text level='f5' textTransform={'uppercase'} color='secondary'>
            verified
          </Text>
        </FlexRow>
        <FlexRow alignItems={'center'} gap='0x'>
          <Icon name='copy' stroke={'secondary'} />
          <Text level='f5' textTransform={'uppercase'} color='secondary'>
            refract.fi/rid/asdiua8sy98
          </Text>
        </FlexRow>
        <FlexRow alignItems={'center'} gap='0x'>
          <Icon name='hourglass' stroke='secondary' />
          <Text level='f5' textTransform={'uppercase'} color='secondary'>
            expires Nov 28th 2021 10:45:34pm
          </Text>
        </FlexRow>
        <FlexRow alignItems={'center'} gap='0x'>
          <Icon name='snapshot' stroke='secondary' />
          <Text level='f5' textTransform={'uppercase'} color='secondary'>
            SNAPSHOT TAKEN oct 28th 2021 10:45:34pm
          </Text>
        </FlexRow>
      </FlexRow>
      <FlexRow gap='1x'>
        <RefractBlock asset='ETH' />
        <RefractBlock asset='USDC' />
        <RefractBlock asset='TOKE' />
      </FlexRow>
      <FlexRow justifyContent={'center'}>
        <Button
          color='orange'
          label='hey mama'
          onClick={() => setRefractPhase(RefractPhases.leftSkew)}
        />
        <Button
          color='orange'
          label='hola papi'
          onClick={() => setRefractPhase(RefractPhases.topSkew)}
        />
        <Button
          color='orange'
          label='bonjour madame'
          onClick={() => {
            setRefractPhase(RefractPhases.rightSkew);
          }}
        />
        <Button
          color='yellow'
          label='reset'
          onClick={() => setRefractPhase(RefractPhases.default)}
        />
      </FlexRow>
    </FlexCol>
  );
};

export default RefractFadeZone;
