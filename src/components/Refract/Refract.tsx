import { Box, Flex } from 'theme/components';
import * as styles from './Refract.css';

const Refract = () => {
  const allocations = [0.5, 0.2, 0.11, 0.1, 0.06, 0.03];

  return (
    <Flex position='relative' alignItems={'center'} justifyContent='center'>
      <Box className={styles.grain} />
      <Box position={'absolute'} top='0' className={styles.refract}>
        <svg
          width='875'
          height='446'
          viewBox='0 0 875 446'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_4667_3237)'>
            <rect width='874' height='446' fill='white' />
            <path
              d='M-1.53723e-05 -428C114.775 -428 228.427 -405.393 334.465 -361.471C440.504 -317.548 536.853 -253.17 618.011 -172.011C699.17 -90.8529 763.548 5.49616 807.471 111.535C851.393 217.573 874 331.225 874 446L2.28314e-05 446L-1.53723e-05 -428Z'
              fill='url(#paint0_radial_4667_3237)'
            />
            <path
              d='M875 -429C760.093 -429 646.312 -406.367 540.152 -362.395C433.992 -318.422 337.533 -253.97 256.282 -172.718C175.03 -91.4671 110.578 4.99215 66.6053 111.152C22.6325 217.312 -8.38229e-05 331.093 -8.38229e-05 446L875 446L875 -429Z'
              fill='url(#paint1_radial_4667_3237)'
            />
            <path
              d='M-1.54598e-05 866C114.907 866 228.688 843.367 334.848 799.395C441.008 755.422 537.467 690.97 618.718 609.718C699.97 528.467 764.422 432.008 808.395 325.848C852.368 219.688 875 105.907 875 -9.00002L2.27877e-05 -9.00002L-1.54598e-05 866Z'
              fill='url(#paint2_radial_4667_3237)'
            />
            <path
              d='M875 866C760.093 866 646.312 843.367 540.152 799.395C433.992 755.422 337.533 690.97 256.282 609.718C175.03 528.467 110.578 432.008 66.6053 325.848C22.6325 219.688 -8.38229e-05 105.907 -8.38229e-05 -9.00002L875 -9.00002L875 866Z'
              fill='url(#paint3_radial_4667_3237)'
            />
            <path
              d='M875 0C875 57.3877 863.697 114.213 841.735 167.233C819.774 220.252 787.585 268.426 747.006 309.006C706.426 349.585 658.252 381.774 605.233 403.735C552.213 425.697 495.388 437 438 437C380.612 437 323.787 425.697 270.767 403.735C217.748 381.774 169.574 349.585 128.994 309.006C88.4151 268.426 56.2259 220.252 34.2646 167.233C12.3033 114.213 0.999995 57.3876 1 -3.82038e-05L438 0L875 0Z'
              fill='url(#paint4_radial_4667_3237)'
            />
            <path
              d='M875 446C875 330.1 828.959 218.948 747.006 136.994C665.052 55.041 553.9 9.00001 438 9C322.1 8.99999 210.948 55.0409 128.994 136.994C47.041 218.948 1.00002 330.1 1 446L438 446H875Z'
              fill='url(#paint5_radial_4667_3237)'
            />
            <path
              d='M436 446C436 387.918 459.073 332.214 500.144 291.144C541.214 250.073 596.918 227 655 227C713.082 227 768.786 250.073 809.856 291.144C850.927 332.214 874 387.918 874 446L655 446L436 446Z'
              fill='url(#paint6_radial_4667_3237)'
            />
          </g>
          <defs>
            <radialGradient
              id='paint0_radial_4667_3237'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(2.28314e-05 446) scale(874 874)'
            >
              <stop stopColor='#0024FF' />
              <stop offset='1' stopColor='#0024FF' stopOpacity='0' />
            </radialGradient>
            <radialGradient
              id='paint1_radial_4667_3237'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(875 446) rotate(-180) scale(875 875)'
            >
              <stop stopColor='#88E3F0' />
              <stop offset='1' stopColor='#88E3F0' stopOpacity='0' />
            </radialGradient>
            <radialGradient
              id='paint2_radial_4667_3237'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(2.27877e-05 -9.00002) scale(875 875)'
            >
              <stop stopColor='#FF4343' />
              <stop offset='1' stopColor='#FF4343' stopOpacity='0' />
            </radialGradient>
            <radialGradient
              id='paint3_radial_4667_3237'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(875 -9.00006) rotate(180) scale(421.5 421.5)'
            >
              <stop stopColor='#FFAB0F' />
              <stop offset='1' stopColor='#FFAB0F' stopOpacity='0' />
            </radialGradient>
            <radialGradient
              id='paint4_radial_4667_3237'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(438) rotate(90) scale(437)'
            >
              <stop stopColor='#886FF4' />
              <stop offset='1' stopColor='#D9D9D9' stopOpacity='0' />
            </radialGradient>
            <radialGradient
              id='paint5_radial_4667_3237'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(438 446) rotate(90) scale(437)'
            >
              <stop stopColor='#9AF46F' />
              <stop offset='1' stopColor='#D9D9D9' stopOpacity='0' />
            </radialGradient>
            <radialGradient
              id='paint6_radial_4667_3237'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(655 446) rotate(-90) scale(183 183)'
            >
              <stop stopColor='#BDFFE7' />
              <stop offset='1' stopColor='#BDFFE7' stopOpacity='0' />
            </radialGradient>
            <clipPath id='clip0_4667_3237'>
              <rect width='875' height='446' fill='white' />
            </clipPath>
          </defs>
        </svg>
      </Box>
    </Flex>
  );
};

export default Refract;

// <style>.j{fill:url(#e);}.k{fill:url(#d);}.l{fill:url(#g);}.m{fill:url(#f);}.n{fill:url(#i);}.o{fill:url(#h);}.p{fill:url(#c);}.q{fill:none;}.r{fill:#fff;}.s{clip-path:url(#b);}</style>
