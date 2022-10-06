import { Button, Icon, Text, Title } from 'components';
import { iconNames } from 'components/Icon/Icon';
import { useState } from 'react';
import { Box, FlexCol, FlexRow } from 'theme/components';
import * as styles from './AllocationBlock.css';

interface AllocationProps {
  url: string;
  symbol: string;
  share: number;
}

interface AllocationBlockProps {
  title: string;
  allocationShare: number;
  allocations: AllocationProps[];
  iconName: iconNames;
}

const AllocationBlock = ({
  title,
  allocationShare,
  allocations,
  iconName,
}: AllocationBlockProps) => {
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <FlexRow marginY='1x'>
      <FlexCol width={'full'}>
        <FlexCol>
          <Button
            display='flex'
            flexDirection='row'
            alignItems='center'
            width={'full'}
            justifyContent='space-between'
            size='none'
            paddingY='2x'
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FlexRow alignItems={'center'} gap='2x'>
              <Icon name={iconName} color='white' />
              <Title level='4' textTransform='uppercase'>
                {title}
              </Title>
              <Text level='b2' color='secondary'>
                {allocations.length} assets
              </Text>
            </FlexRow>
            <FlexRow alignItems={'center'} gap='2x'>
              <Text level='b2' color='secondary'>
                Total Weight
              </Text>
              <Text
                display='flex'
                alignItems={'center'}
                justifyContent='center'
                level='f3'
                width='18x'
                height='8x'
                color='primary'
                backgroundColor={'bg-primary'}
              >
                {allocationShare * 100}%
              </Text>
              <Icon name='chevron' color='white' rotate={showDropdown ? '0deg' : '180deg'} />
            </FlexRow>
          </Button>
          <Box height={1} background='spectrum' opacity={0.5} />
        </FlexCol>
        <FlexCol display={showDropdown ? 'flex' : 'none'}>
          <>
            <Box className={styles.allocationGridTemplate} paddingY='2x' alignItems={'center'}>
              <Text level='b2' color='secondary' className={styles.allocationGridItem}>
                Asset
              </Text>
              <Text level='b2' color='secondary' className={styles.allocationGridItem}>
                Price
              </Text>
              <Text level='b2' color='secondary' className={styles.allocationGridItem}>
                Weight
              </Text>
            </Box>
            <Box height={1} backgroundColor='separator-opaque' />
          </>
          {allocations.map((allocation: AllocationProps, index: number) => (
            // wen data remove key = index
            <>
              <Box
                className={styles.allocationGridTemplate}
                key={index}
                paddingY='1x'
                alignItems={'center'}
              >
                <FlexRow alignItems='center' gap='2x' className={styles.allocationGridItem}>
                  <Box width='5x' height='5x' component='img' src={allocation.url} />
                  <FlexCol>
                    <Text level='b2' textTransform={'uppercase'}>
                      {allocation.symbol}
                    </Text>
                    <Text level='b4' textTransform={'uppercase'} color='secondary'>
                      {allocation.symbol}
                    </Text>
                  </FlexCol>
                </FlexRow>
                <Text className={styles.allocationGridItem}>$ 10.21</Text>
                <Text level='b1' className={styles.allocationGridItem}>
                  {allocation.share * 100}%
                </Text>
              </Box>
              <Box height={1} backgroundColor='separator-opaque' />
            </>
          ))}
          <FlexRow justifyContent='center' paddingY='1x'>
            <Button color='action' level='f4' textTransform={'uppercase'} label='show all assets' />
          </FlexRow>
        </FlexCol>
      </FlexCol>
    </FlexRow>
  );
};

export default AllocationBlock;
