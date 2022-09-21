import { Box, Flex } from 'theme/components';
import * as styles from './Refract.css';

const Refract = () => {
  const allocations = [0.5, 0.2, 0.11, 0.1, 0.06, 0.03];

  return (
    <Flex position='relative' alignItems={'center'} justifyContent='center'>
      <Box className={styles.grain} />
      <Box position={'absolute'} top='0' className={styles.refract}>
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
              cx='900'
              cy='900'
              rx='900'
              ry='900'
              transform='rotate(-90 900 900) scale(1) translate(950, -830)'
              fill='url(#top_left_gradient)'
            />
            <ellipse
              cx='900'
              cy='900'
              rx='900'
              ry='900'
              transform='rotate(-90 900 900) scale(1) translate(950, -400)'
              fill='url(#top_middle_gradient)'
            />
            <ellipse
              cx='900'
              cy='900'
              rx='900'
              ry='900'
              transform='rotate(-90 900 900) scale(1) translate(950, 0)'
              fill='url(#top_right_gradient)'
            />
            <ellipse
              cx='900'
              cy='900'
              rx='900'
              ry='900'
              transform='rotate(-90 900 900) scale(1) translate(500, -830)'
              fill='url(#bottom_left_gradient)'
            />
            <ellipse
              cx='900'
              cy='900'
              rx='900'
              ry='900'
              transform='rotate(-90 900 900) scale(1) translate(500, -400)'
              fill='url(#bottom_middle_gradient)'
            />

            <ellipse
              cx='900'
              cy='900'
              rx='900'
              ry='900'
              transform='rotate(-90 900 900) scale(1) translate(500, 0)'
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
              gradientTransform='translate(900 900) rotate(90) scale(900 900)'
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
              gradientTransform='translate(900 900) rotate(90) scale(900 900)'
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
              gradientTransform='translate(900 900) rotate(90) scale(900 900)'
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
              gradientTransform='translate(900 900) rotate(90) scale(900 900)'
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
              gradientTransform='translate(900 900) rotate(90) scale(900 900)'
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
              gradientTransform='translate(900 900) rotate(90) scale(900 900)'
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

// <style>.j{fill:url(#e);}.k{fill:url(#d);}.l{fill:url(#g);}.m{fill:url(#f);}.n{fill:url(#i);}.o{fill:url(#h);}.p{fill:url(#c);}.q{fill:none;}.r{fill:#fff;}.s{clip-path:url(#b);}</style>
