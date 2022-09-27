import clsx from 'clsx';
import StackedBarChart from 'components/StackedBarChart/StackedBarChart';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { refractPhaseState } from 'states/refractPhaseState';
import { Box, Flex, FlexCol } from 'theme/components';
import * as styles from './Refract.css';

interface RefractProps {
  page: string;
}

const Refract = ({ page }: RefractProps) => {
  const [topLeftScale, setTopLeftScale] = useState(10);
  const [topMiddleScale, setTopMiddleScale] = useState(10);
  const [topRightScale, setTopRightScale] = useState(10);
  const [bottomLeftScale, setBottomLeftScale] = useState(10);
  const [bottomMiddleScale, setBottomMiddleScale] = useState(10);
  const [bottomRightScale, setBottomRightScale] = useState(10);

  const { isTopSkew } = useRecoilValue(refractPhaseState);

  const topLeftPosX = 0;
  const topLeftPosY = 0;

  const topMiddlePosX = 450;
  const topMiddlePosY = 0;

  const topRightPosX = 900;
  const topRightPosY = 0;

  const bottomLeftPosX = 0;
  const bottomLeftPosY = 450;

  const bottomMiddlePosX = 450;
  const bottomMiddlePosY = 450;

  const bottomRightPosX = 900;
  const bottomRightPosY = 450;

  return (
    <Flex
      position='relative'
      alignItems={'center'}
      justifyContent='center'
      className={clsx(styles.refractWrapper, page)}
    >
      <Box className={clsx(styles.grain, page, isTopSkew && 'topSkew')} />
      <Box
        position={'absolute'}
        top='0'
        className={clsx(styles.refract, page, isTopSkew && 'topSkew')}
      >
        <svg
          width='900'
          height='450'
          viewBox='0 0 900 450'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_4667_3237)'>
            <rect width='900' height='450' fill='white' />
            <ellipse
              cx={topLeftPosX}
              cy={topLeftPosY}
              rx={topLeftScale * 100}
              ry={topLeftScale * 100}
              fill='url(#top_left_gradient)'
            />
            <ellipse
              cx={topMiddlePosX}
              cy={topMiddlePosY}
              rx={topMiddleScale * 100}
              ry={topMiddleScale * 100}
              fill='url(#top_middle_gradient)'
            />
            <ellipse
              cx={topRightPosX}
              cy={topRightPosY}
              rx={topRightScale * 100}
              ry={topRightScale * 100}
              fill='url(#top_right_gradient)'
            />
            <ellipse
              cx={bottomLeftPosX}
              cy={bottomLeftPosY}
              rx={bottomLeftScale * 100}
              ry={bottomLeftScale * 100}
              fill='url(#bottom_left_gradient)'
            />
            <ellipse
              cx={bottomMiddlePosX}
              cy={bottomMiddlePosY}
              rx={bottomMiddleScale * 100}
              ry={bottomMiddleScale * 100}
              fill='url(#bottom_middle_gradient)'
            />
            <ellipse
              cx={bottomRightPosX}
              cy={bottomRightPosY}
              rx={bottomRightScale * 100}
              ry={bottomRightScale * 100}
              fill='url(#bottom_right_gradient)'
            />
          </g>
          <defs>
            <radialGradient
              id='top_left_gradient'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform={`translate(${topLeftPosX} ${topLeftPosY}) scale(${
                topLeftScale * 100
              })`}
            >
              <stop stopColor='#FF4343' />
              <stop offset='0.5' stopColor='#FF4343' stopOpacity='0' />
            </radialGradient>
            <radialGradient
              id='top_middle_gradient'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform={`translate(${topMiddlePosX} ${topMiddlePosY}) scale(${
                topMiddleScale * 100
              })`}
            >
              <stop stopColor='#0024FF' />
              <stop offset='0.5' stopColor='#0024FF' stopOpacity='0' />
            </radialGradient>
            <radialGradient
              id='top_right_gradient'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform={`translate(${topRightPosX} ${topRightPosY}) scale(${
                topRightScale * 100
              })`}
            >
              <stop stopColor='#FFAB0F' />
              <stop offset='0.5' stopColor='#FFAB0F' stopOpacity='0' />
            </radialGradient>
            <radialGradient
              id='bottom_left_gradient'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform={`translate(${bottomLeftPosX} ${bottomLeftPosY}) scale(${
                bottomLeftScale * 100
              })`}
            >
              <stop stopColor='#886FF4' />
              <stop offset='0.5' stopColor='#886FF4' stopOpacity='0' />
            </radialGradient>

            <radialGradient
              id='bottom_middle_gradient'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform={`translate(${bottomMiddlePosX} ${bottomMiddlePosY}) scale(${
                bottomMiddleScale * 100
              })`}
            >
              <stop stopColor='#9AF46F' />
              <stop offset='0.5' stopColor='#9AF46F' stopOpacity='0' />
            </radialGradient>
            <radialGradient
              id='bottom_right_gradient'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform={`translate(${bottomRightPosX} ${bottomRightPosY}) scale(${
                bottomRightScale * 100
              })`}
            >
              <stop stopColor='#88E3F0' />
              <stop offset='0.5' stopColor='#88E3F0' stopOpacity='0' />
            </radialGradient>

            <clipPath id='clip0_4667_3237'>
              <rect width='900' height='450' fill='white' />
            </clipPath>
          </defs>
        </svg>
      </Box>
    </Flex>
  );
};

export default Refract;
