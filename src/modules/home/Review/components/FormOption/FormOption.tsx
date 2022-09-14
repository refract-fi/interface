import { assignInlineVars } from '@vanilla-extract/dynamic';
import { Icon, Text, Title } from 'components';
import { Box, Flex, FlexCol, FlexRow } from 'theme/components';
import { componentIndex } from './FormOption.css';
import { IFormOption } from 'utils/types/form';
import { fadeInAnimTranslateY } from './FormOption.css';

interface FormOptionProps extends IFormOption {
  animDelay: string;
  inactive?: boolean;
}

const FormOption = ({ title, icon, activeOption, animDelay, inactive }: FormOptionProps) => {
  return (
    <FlexCol
      className={fadeInAnimTranslateY}
      style={assignInlineVars({ [componentIndex]: animDelay })}
    >
      <FlexRow justifyContent='space-between' alignItems={'center'} paddingY='5x'>
        <Flex gap='2x' alignItems={'center'}>
          <Icon name={icon} stroke='secondary' />
          <Title level={'6'} color='secondary' textTransform={'uppercase'}>
            {title}
          </Title>
        </Flex>
        <Text
          level='f4'
          weight='bold'
          textTransform={'uppercase'}
          color={inactive ? 'secondary' : 'primary'}
        >
          {activeOption}
        </Text>
      </FlexRow>
      <Box height={1} width={'full'} backgroundColor='separator-non-opaque' />
    </FlexCol>
  );
};

export default FormOption;
