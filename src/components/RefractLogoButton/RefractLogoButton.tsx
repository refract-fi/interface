import { animated, useSpring } from '@react-spring/web';
import { Box, BoxProps } from 'theme/components';

interface RefractButtonLogoProps extends BoxProps {
  onClick: () => void;
  size: number;
}

const RefractLogoButton = ({ onClick, size = 50, ...restProps }: RefractButtonLogoProps) => {
  const [{ stop1, stop2, stop3, stop4, stop5, stop6, stop7, stop8 }, setSVGParams] = useSpring(
    () => ({
      stop1: 'white',
      stop2: 'white',
      stop3: 'white',
      stop4: 'white',
      stop5: 'white',
      stop6: 'white',
      stop7: 'white',
      stop8: 'white',
    })
  );
  return (
    <Box
      onMouseEnter={() =>
        setSVGParams(() => ({
          stop1: '#D55535',
          stop2: '#E9B047',
          stop3: '#F8EC8B',
          stop4: '#F4F3CB',
          stop5: '#BBEEF0',
          stop6: '#88E3F0',
          stop7: '#4FC1DE',
          stop8: '#2439BC',
        }))
      }
      onMouseLeave={() =>
        setSVGParams(() => ({
          stop1: 'white',
          stop2: 'white',
          stop3: 'white',
          stop4: 'white',
          stop5: 'white',
          stop6: 'white',
          stop7: 'white',
          stop8: 'white',
        }))
      }
      width='fit-content'
      height='fit'
      cursor='pointer'
      onClick={() => onClick()}
      {...restProps}
    >
      <svg
        width={size}
        height={size}
        viewBox='0 0 50 50'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M23.4883 4.23607L23.4883 46L0.999996 23.5117L23.4883 4.23607Z' fill='white' />
        <path
          d='M28.199 44.3127L26.5117 46L26.5117 42.8664L28.199 44.3127Z'
          fill='url(#paint0_linear_4719_3721)'
        />
        <path
          d='M33.1975 39.3142L35.1185 37.3932L26.5117 30.016L26.5117 33.5835L33.1975 39.3142Z'
          fill='url(#paint1_linear_4719_3721)'
        />
        <path
          d='M26.5117 26.7803L36.8608 35.6509L39.1888 33.3229L26.5117 22.4569L26.5117 26.7803Z'
          fill='url(#paint2_linear_4719_3721)'
        />
        <path
          d='M40.9311 31.5807L26.5117 19.2212L26.5117 14.0879L43.6952 28.8166L40.9311 31.5807Z'
          fill='url(#paint3_linear_4719_3721)'
        />
        <path
          d='M45.4374 27.0743L26.5117 10.8522L26.5117 4.23608L49 23.5117L45.4374 27.0743Z'
          fill='url(#paint4_linear_4719_3721)'
        />
        <path
          d='M31.4553 41.0565L29.9413 42.5704L26.5117 39.6307L26.5117 36.8191L31.4553 41.0565Z'
          fill='url(#paint5_linear_4719_3721)'
        />
        <defs>
          <linearGradient
            id='paint4_linear_4719_3721'
            x1='26.5117'
            y1='25.118'
            x2='49'
            y2='25.118'
            gradientUnits='userSpaceOnUse'
          >
            <animated.stop stopColor={stop1} />
            <animated.stop offset='0.291667' stopColor={stop2} />
            <animated.stop offset='0.427083' stopColor={stop3} />
            <animated.stop offset='0.526042' stopColor={stop4} />
            <animated.stop offset='0.630208' stopColor={stop5} />
            <animated.stop offset='0.735272' stopColor={stop6} />
            <animated.stop offset='0.838043' stopColor={stop7} />
            <animated.stop offset='1' stopColor={stop8} />
          </linearGradient>
          <linearGradient
            id='paint3_linear_4719_3721'
            x1='26.5117'
            y1='25.118'
            x2='49'
            y2='25.118'
            gradientUnits='userSpaceOnUse'
          >
            <animated.stop stopColor={stop1} />
            <animated.stop offset='0.291667' stopColor={stop2} />
            <animated.stop offset='0.427083' stopColor={stop3} />
            <animated.stop offset='0.526042' stopColor={stop4} />
            <animated.stop offset='0.630208' stopColor={stop5} />
            <animated.stop offset='0.735272' stopColor={stop6} />
            <animated.stop offset='0.838043' stopColor={stop7} />
            <animated.stop offset='1' stopColor={stop8} />
          </linearGradient>
          <linearGradient
            id='paint2_linear_4719_3721'
            x1='26.5117'
            y1='25.118'
            x2='49'
            y2='25.118'
            gradientUnits='userSpaceOnUse'
          >
            <animated.stop stopColor={stop1} />
            <animated.stop offset='0.291667' stopColor={stop2} />
            <animated.stop offset='0.427083' stopColor={stop3} />
            <animated.stop offset='0.526042' stopColor={stop4} />
            <animated.stop offset='0.630208' stopColor={stop5} />
            <animated.stop offset='0.735272' stopColor={stop6} />
            <animated.stop offset='0.838043' stopColor={stop7} />
            <animated.stop offset='1' stopColor={stop8} />
          </linearGradient>
          <linearGradient
            id='paint1_linear_4719_3721'
            x1='26.5117'
            y1='25.118'
            x2='49'
            y2='25.118'
            gradientUnits='userSpaceOnUse'
          >
            <animated.stop stopColor={stop1} />
            <animated.stop offset='0.291667' stopColor={stop2} />
            <animated.stop offset='0.427083' stopColor={stop3} />
            <animated.stop offset='0.526042' stopColor={stop4} />
            <animated.stop offset='0.630208' stopColor={stop5} />
            <animated.stop offset='0.735272' stopColor={stop6} />
            <animated.stop offset='0.838043' stopColor={stop7} />
            <animated.stop offset='1' stopColor={stop8} />
          </linearGradient>
          <linearGradient
            id='paint5_linear_4719_3721'
            x1='26.5117'
            y1='25.118'
            x2='49'
            y2='25.118'
            gradientUnits='userSpaceOnUse'
          >
            <animated.stop stopColor={stop1} />
            <animated.stop offset='0.291667' stopColor={stop2} />
            <animated.stop offset='0.427083' stopColor={stop3} />
            <animated.stop offset='0.526042' stopColor={stop4} />
            <animated.stop offset='0.630208' stopColor={stop5} />
            <animated.stop offset='0.735272' stopColor={stop6} />
            <animated.stop offset='0.838043' stopColor={stop7} />
            <animated.stop offset='1' stopColor={stop8} />
          </linearGradient>
          <linearGradient
            id='paint0_linear_4719_3721'
            x1='26.5117'
            y1='25.118'
            x2='49'
            y2='25.118'
            gradientUnits='userSpaceOnUse'
          >
            <animated.stop stopColor={stop1} />
            <animated.stop offset='0.291667' stopColor={stop2} />
            <animated.stop offset='0.427083' stopColor={stop3} />
            <animated.stop offset='0.526042' stopColor={stop4} />
            <animated.stop offset='0.630208' stopColor={stop5} />
            <animated.stop offset='0.735272' stopColor={stop6} />
            <animated.stop offset='0.838043' stopColor={stop7} />
            <animated.stop offset='1' stopColor={stop8} />
          </linearGradient>
        </defs>
      </svg>
    </Box>
  );
};

export default RefractLogoButton;
