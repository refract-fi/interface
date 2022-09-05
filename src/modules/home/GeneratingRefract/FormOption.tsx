import { Icon, Text, Title } from 'components';
import { Flex, FlexRow } from 'theme/components';
import { IFormOption } from 'utils/types/form';

interface FormOptionProps extends IFormOption {}

const FormOption = ({ title, icon, activeOption, optionDetails }: FormOptionProps) => {
  return (
    <FlexRow justifyContent='space-between' alignItems={'center'} paddingY='5x'>
      <Flex gap='2x' alignItems={'center'}>
        <Icon name={icon} stroke='secondary' fill='secondary' />
        <Title level={'6'} color='secondary' textTransform={'uppercase'}>
          {title}
        </Title>
      </Flex>
      <Text level='f4' weight='bold' textTransform={'uppercase'}>
        {activeOption}
      </Text>
    </FlexRow>
  );
};

export default FormOption;
