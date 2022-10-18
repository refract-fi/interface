import Text from 'components/Typography/Text';
import ReactSlider from 'react-slider';
import { FlexCol, FlexRow } from 'theme/components';
import * as styles from './Slider.css';

interface SliderProps {
  min?: number;
  max?: number;
  marks?: number[];
  onChange: ((value: number, index: number) => void) | undefined;
  value: number;
  minValName?: string;
  maxValName?: string;
}

const Slider = ({
  min = 0,
  max = 5,
  marks = [0, 1, 2, 3, 4, 5],
  onChange,
  value = 5,
  minValName = '1 HOUR',
  maxValName = 'NEVER',
}: SliderProps) => {
  return (
    <FlexCol width='full' gap='2x'>
      <FlexRow width='full' justifyContent={'space-between'}>
        <Text level='f4' weight='bold'>
          {minValName}
        </Text>
        <Text level='f4' weight='bold'>
          {maxValName}
        </Text>
      </FlexRow>
      <ReactSlider
        className={styles.slider}
        marks={marks}
        markClassName={styles.mark}
        min={min}
        max={max}
        value={value}
        thumbClassName={styles.thumb}
        onChange={onChange}
        trackClassName={styles.track}
      />
    </FlexCol>
  );
};

export default Slider;
