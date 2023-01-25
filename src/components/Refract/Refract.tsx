import clsx from 'clsx';
import { useEffect, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { refractPhaseState, useRefractPhaseActions } from 'states/refractPhaseState';
import { Box, Flex } from 'theme/components';
import * as styles from './Refract.css';
import { animated, easings, useSpring } from '@react-spring/web';
import Button from 'components/Button/Button';
import useData from 'hooks/useData';
import { useRouter } from 'next/router';
import { RefractData } from 'utils/types/refractData';
import { formPhaseState } from 'states/formPhasesState';

interface RefractProps {
  page?: string;
}

const initialRefractValues = {
  topLeftColor: '#FF4343',
  topLeftOffset: 0.5,
  topLeftOpacity: 1,

  topMiddleColor: '#0024FF',
  topMiddleOffset: 0.5,
  topMiddleOpacity: 1,

  topRightColor: '#FFAB0F',
  topRightOffset: 0.5,
  topRightOpacity: 1,

  bottomLeftColor: '#886FF4',
  bottomLeftOffset: 0.5,
  bottomLeftOpacity: 1,

  bottomMiddleColor: '#9AF46F',
  bottomMiddleOffset: 0.5,
  bottomMiddleOpacity: 1,

  bottomRightColor: '#88E3F0',
  bottomRightOffset: 0.5,
  bottomRightOpacity: 1,
};

const Refract = ({ page }: RefractProps) => {
  const [topLeftScale, setTopLeftScale] = useState(10);
  const [topMiddleScale, setTopMiddleScale] = useState(10);
  const [topRightScale, setTopRightScale] = useState(10);
  const [bottomLeftScale, setBottomLeftScale] = useState(10);
  const [bottomMiddleScale, setBottomMiddleScale] = useState(10);
  const [bottomRightScale, setBottomRightScale] = useState(10);

  const { phase } = useRecoilValue(formPhaseState);

  const { isTopSkew } = useRecoilValue(refractPhaseState);
  const { setIsTopSkew } = useRefractPhaseActions();
  const router = useRouter();
  const { data, error, isValidating } = useData(router?.query?.rid ? `${router.query.rid}` : '');
  const sortedBalanceData = useMemo(() => {
    if (data && !error && !isValidating) {
      const sortedData = data.data.sort(
        (a: RefractData, b: RefractData) => b.percentage - a.percentage
      );
      const organisedData = data.data.slice(0, 5);

      let sumOfOtherAssets = 0;
      const otherAssets = sortedData.slice(5, -1).map((otherAsset: RefractData) => {
        sumOfOtherAssets += otherAsset.percentage;
        return {
          name: otherAsset.token.name,
          percentage: otherAsset.percentage,
          metaType: 'other',
        };
      });
      organisedData.push({
        apps: otherAssets,
        percentage: sumOfOtherAssets,
        token: {
          colors: ['#000000', '#FFFFFF'],
          decimals: 18,
          mainColor: '#9AF46F',
          id: 'other-assets',
          name: 'Other Assets',
          symbol: 'OTHER',
        },
      });
      return organisedData;
    } else {
      return [];
    }
  }, [data, error, isValidating]);

  const userRefractValues = useMemo(() => {
    if (sortedBalanceData.length > 0) {
      return {
        topLeftColor: sortedBalanceData[0]?.token.mainColor,
        topLeftOffset: 0.5,
        topLeftOpacity: 1,

        topMiddleColor: sortedBalanceData[5]?.token.mainColor,
        topMiddleOffset: 0.5,
        topMiddleOpacity: 1,

        topRightColor: sortedBalanceData[2]?.token.mainColor,
        topRightOffset: 0.5,
        topRightOpacity: 1,

        bottomLeftColor: sortedBalanceData[1]?.token.mainColor,
        bottomLeftOffset: 0.5,
        bottomLeftOpacity: 1,

        bottomMiddleColor: sortedBalanceData[4]?.token.mainColor,
        bottomMiddleOffset: 0.5,
        bottomMiddleOpacity: 1,

        bottomRightColor: sortedBalanceData[3]?.token.mainColor,
        bottomRightOffset: 0.5,
        bottomRightOpacity: 1,
      };
    }
  }, [sortedBalanceData]);
  const [
    {
      topLeftColor,
      topLeftOffset,
      topLeftOpacity,
      topMiddleColor,
      topMiddleOffset,
      topMiddleOpacity,
      topRightColor,
      topRightOffset,
      topRightOpacity,
      bottomLeftColor,
      bottomLeftOffset,
      bottomLeftOpacity,
      bottomMiddleColor,
      bottomMiddleOffset,
      bottomMiddleOpacity,
      bottomRightColor,
      bottomRightOffset,
      bottomRightOpacity,
    },
    setSVGParams,
  ] = useSpring(() => ({
    from: initialRefractValues,
  }));

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
  useEffect(() => {
    if (page === 'loading') {
      setSVGParams(() => ({
        from: {
          topLeftColor: '#FF4343',
          topLeftOffset: 0.5,
          topLeftOpacity: 0.5,
          topMiddleColor: '#0024FF',
          topMiddleOffset: 0,
          topMiddleOpacity: 0,
          topRightColor: '#FFAB0F',
          topRightOffset: 0,
          topRightOpacity: 0,
          bottomLeftColor: '#886FF4',
          bottomLeftOffset: 0,
          bottomLeftOpacity: 0,
          bottomMiddleColor: '#9AF46F',
          bottomMiddleOffset: 0,
          bottomMiddleOpacity: 0,
          bottomRightColor: '#88E3F0',
          bottomRightOffset: 0,
          bottomRightOpacity: 0,
        },
        to: async (next, cancel) => {
          await next({
            topLeftOffset: 1,
            topLeftOpacity: 1,
            bottomLeftOffset: 0,
            bottomLeftOpacity: 0,
          });
          await next({
            topLeftOffset: 0,
            topLeftOpacity: 0,
            topMiddleOffset: 1,
            topMiddleOpacity: 1,
          });
          await next({
            topMiddleOffset: 0,
            topMiddleOpacity: 0,
            topRightOffset: 1,
            topRightOpacity: 1,
          });
          await next({
            topRightOffset: 0,
            topRightOpacity: 0,
            bottomRightOffset: 1,
            bottomRightOpacity: 1,
          });
          await next({
            bottomRightOffset: 0,
            bottomRightOpacity: 0,
            bottomMiddleOffset: 1,
            bottomMiddleOpacity: 1,
          });
          await next({
            bottomMiddleOffset: 0,
            bottomMiddleOpacity: 0,
            bottomLeftOffset: 1,
            bottomLeftOpacity: 1,
          });
        },
        config: {
          friction: 50,
          duration: 1700,
          easing: easings.easeInOutSine,
        },
        loop: {
          reverse: false,
        },
      }));
    }
  }, [page, setSVGParams]);

  useEffect(() => {
    if (userRefractValues) {
      setSVGParams(() => ({
        to: async (next, cancel) => {
          await next(userRefractValues);
        },
        config: {
          friction: 100,
          duration: 300,
          easing: easings.easeOutCirc,
        },
        loop: {
          reverse: false,
        },
      }));
    }
    console.log('re-render');
  }, [userRefractValues, setSVGParams]);

  return (
    <>
      <Flex
        alignItems={'center'}
        justifyContent='center'
        className={clsx(styles.refractWrapper, page)}
      >
        <Box
          position={'relative'}
          top='0'
          className={clsx(styles.refract, page, isTopSkew && 'topSkew')}
        >
          <svg
            viewBox='0 0 900 450'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={styles.svg}
          >
            <g clipPath='url(#clip0_4667_3237)'>
              <rect width='900' height='450' fill='black' />
              <animated.ellipse
                cx={topLeftPosX}
                cy={topLeftPosY}
                rx={topLeftScale * 100}
                ry={topLeftScale * 100}
                fill='url(#top_left_gradient)'
                opacity={topLeftOpacity}
              />
              <animated.ellipse
                cx={topMiddlePosX}
                cy={topMiddlePosY}
                rx={topMiddleScale * 100}
                ry={topMiddleScale * 100}
                fill='url(#top_middle_gradient)'
                opacity={topMiddleOpacity}
              />
              <animated.ellipse
                cx={topRightPosX}
                cy={topRightPosY}
                rx={topRightScale * 100}
                ry={topRightScale * 100}
                fill='url(#top_right_gradient)'
                opacity={topRightOpacity}
              />
              <animated.ellipse
                cx={bottomLeftPosX}
                cy={bottomLeftPosY}
                rx={bottomLeftScale * 100}
                ry={bottomLeftScale * 100}
                fill='url(#bottom_left_gradient)'
                opacity={bottomLeftOpacity}
              />
              <animated.ellipse
                cx={bottomMiddlePosX}
                cy={bottomMiddlePosY}
                rx={bottomMiddleScale * 100}
                ry={bottomMiddleScale * 100}
                fill='url(#bottom_middle_gradient)'
                opacity={bottomMiddleOpacity}
              />
              <animated.ellipse
                cx={bottomRightPosX}
                cy={bottomRightPosY}
                rx={bottomRightScale * 100}
                ry={bottomRightScale * 100}
                fill='url(#bottom_right_gradient)'
                opacity={bottomRightOpacity}
              />
            </g>
            <rect
              x='0'
              width='900'
              height='450'
              fill='url(#pattern0)'
              fillOpacity='0.8'
              style={{ mixBlendMode: 'color-burn' }}
            />
            <rect
              x='0'
              width='900'
              height='450'
              fill='url(#pattern0)'
              fillOpacity='0.8'
              style={{ mixBlendMode: 'color-burn' }}
            />
            <defs>
              <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
                <image
                  href='/grain.png'
                  transform='translate(0 -0.15648) scale(0.001111 0.00257)'
                />
              </pattern>
              <animated.radialGradient
                id='top_left_gradient'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform={`translate(${topLeftPosX} ${topLeftPosY}) scale(${
                  topLeftScale * 100
                })`}
              >
                <animated.stop
                  // stopColor={
                  //   sortedBalanceData.length > 0 && sortedBalanceData[0]?.token.mainColor
                  //     ? sortedBalanceData[0]?.token.mainColor
                  //     : '#FFF'
                  // }
                  stopColor={topLeftColor}
                />
                <animated.stop
                  offset={topLeftOffset}
                  // stopColor={
                  //   sortedBalanceData.length > 0 && sortedBalanceData[0]?.token.mainColor
                  //     ? sortedBalanceData[0].token.mainColor
                  //     : '#FFF'
                  // }
                  stopColor={topLeftColor}
                  stopOpacity='0'
                />
              </animated.radialGradient>
              <animated.radialGradient
                id='top_middle_gradient'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform={`translate(${topMiddlePosX} ${topMiddlePosY}) scale(${
                  topMiddleScale * 100
                })`}
              >
                <animated.stop
                  // stopColor={
                  //   sortedBalanceData.length > 0 && sortedBalanceData[1]?.token.mainColor
                  //     ? sortedBalanceData[1]?.token.mainColor
                  //     : '#FFF'
                  // }
                  stopColor={topMiddleColor}
                />
                <animated.stop
                  offset={topMiddleOffset}
                  // stopColor={
                  //   sortedBalanceData.length > 0 && sortedBalanceData[1]?.token.mainColor
                  //     ? sortedBalanceData[1]?.token.mainColor
                  //     : '#FFF'
                  // }
                  stopColor={topMiddleColor}
                  stopOpacity='0'
                />
              </animated.radialGradient>
              <animated.radialGradient
                id='top_right_gradient'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform={`translate(${topRightPosX} ${topRightPosY}) scale(${
                  topRightScale * 100
                })`}
              >
                <animated.stop
                  // stopColor={
                  //   sortedBalanceData.length > 0 && sortedBalanceData[2]?.token.mainColor
                  //     ? sortedBalanceData[2]?.token.mainColor
                  //     : '#FFF'
                  // }
                  stopColor={topRightColor}
                />
                <animated.stop
                  offset={topRightOffset}
                  // stopColor={
                  //   sortedBalanceData.length > 0 && sortedBalanceData[2]?.token.mainColor
                  //     ? sortedBalanceData[2]?.token.mainColor
                  //     : '#FFF'
                  // }
                  stopColor={topRightColor}
                  stopOpacity='0'
                />
              </animated.radialGradient>
              <animated.radialGradient
                id='bottom_left_gradient'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform={`translate(${bottomLeftPosX} ${bottomLeftPosY}) scale(${
                  bottomLeftScale * 100
                })`}
              >
                <animated.stop
                  // stopColor={
                  //   sortedBalanceData.length > 0 && sortedBalanceData[3]?.token.mainColor
                  //     ? sortedBalanceData[3]?.token.mainColor
                  //     : '#FFF'
                  // }
                  stopColor={bottomLeftColor}
                />
                <animated.stop
                  offset={bottomLeftOffset}
                  // stopColor={
                  //   sortedBalanceData.length > 0 && sortedBalanceData[3]?.token.mainColor
                  //     ? sortedBalanceData[3]?.token.mainColor
                  //     : '#FFF'
                  // }
                  stopColor={bottomLeftColor}
                  stopOpacity='0'
                />
              </animated.radialGradient>

              <animated.radialGradient
                id='bottom_middle_gradient'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform={`translate(${bottomMiddlePosX} ${bottomMiddlePosY}) scale(${
                  bottomMiddleScale * 100
                })`}
              >
                <animated.stop
                  // stopColor={
                  //   sortedBalanceData.length > 0 && sortedBalanceData[4]?.token.mainColor
                  //     ? sortedBalanceData[4]?.token.mainColor
                  //     : '#FFF'
                  // }
                  stopColor={bottomMiddleColor}
                />
                <animated.stop
                  offset={bottomMiddleOffset}
                  // stopColor={
                  //   sortedBalanceData.length > 0 && sortedBalanceData[4]?.token.mainColor
                  //     ? sortedBalanceData[4]?.token.mainColor
                  //     : '#FFF'
                  // }
                  stopColor={bottomMiddleColor}
                  stopOpacity='0'
                />
              </animated.radialGradient>
              <animated.radialGradient
                id='bottom_right_gradient'
                cx='0'
                cy='0'
                r='1'
                gradientUnits='userSpaceOnUse'
                gradientTransform={`translate(${bottomRightPosX} ${bottomRightPosY}) scale(${
                  bottomRightScale * 100
                })`}
              >
                <animated.stop
                  // stopColor={
                  //   sortedBalanceData.length > 0 && sortedBalanceData[5]?.token.mainColor
                  //     ? sortedBalanceData[5]?.token.mainColor
                  //     : '#FFF'
                  // }
                  stopColor={bottomRightColor}
                />
                <animated.stop
                  offset={bottomRightOffset}
                  // stopColor={
                  //   sortedBalanceData.length > 0 && sortedBalanceData[5]?.token.mainColor
                  //     ? sortedBalanceData[5]?.token.mainColor
                  //     : '#FFF'
                  // }
                  stopColor={bottomRightColor}
                  stopOpacity='0'
                />
              </animated.radialGradient>

              <clipPath id='clip0_4667_3237'>
                <rect width='900' height='450' fill='white' />
              </clipPath>
            </defs>
          </svg>
        </Box>
        {/* Pls cleanup mess below */}
        {(page === 'allocations' ||
          page === 'stats' ||
          page === 'refract' ||
          page === 'insights') && (
          <Box display={{ sm: 'none', md: 'block' }}>
            <Button
              position={'absolute'}
              left='60x'
              top='0'
              height='60x'
              width='72x'
              color='action'
              onMouseEnter={() =>
                !isTopSkew &&
                setSVGParams({
                  topMiddleOpacity: 0.2,
                  topRightOpacity: 0.2,
                  bottomLeftOpacity: 0.2,
                  bottomMiddleOpacity: 0.2,
                  bottomRightOpacity: 0.2,
                })
              }
              onMouseLeave={() =>
                !isTopSkew && setSVGParams(userRefractValues || initialRefractValues)
              }
              onClick={() => {
                if (isTopSkew) {
                  setSVGParams(userRefractValues || initialRefractValues);
                  setIsTopSkew(false);
                } else {
                  setSVGParams({
                    topMiddleOpacity: 0.2,
                    topRightOpacity: 0.2,
                    bottomLeftOpacity: 0.2,
                    bottomMiddleOpacity: 0.2,
                    bottomRightOpacity: 0.2,
                  });
                  setIsTopSkew(true);
                }
              }}
            />
            <Button
              position={'absolute'}
              left='60x'
              height='60x'
              top='0'
              marginLeft='72x'
              width='72x'
              color='action'
              onMouseEnter={() =>
                !isTopSkew &&
                setSVGParams({
                  topLeftOpacity: 0.2,
                  topRightOpacity: 0.2,
                  bottomLeftOpacity: 0.2,
                  bottomMiddleOpacity: 0.2,
                  bottomRightOpacity: 0.2,
                })
              }
              onMouseLeave={() =>
                !isTopSkew && setSVGParams(userRefractValues || initialRefractValues)
              }
              onClick={() => {
                if (isTopSkew) {
                  setSVGParams(userRefractValues || initialRefractValues);
                  setIsTopSkew(false);
                } else {
                  setSVGParams({
                    topLeftOpacity: 0.2,
                    topRightOpacity: 0.2,
                    bottomLeftOpacity: 0.2,
                    bottomMiddleOpacity: 0.2,
                    bottomRightOpacity: 0.2,
                  });
                  setIsTopSkew(true);
                }
              }}
            />
            <Button
              position={'absolute'}
              right='60x'
              top='0'
              height='60x'
              width='72x'
              color='action'
              onMouseEnter={() =>
                !isTopSkew &&
                setSVGParams({
                  topLeftOpacity: 0.2,
                  topMiddleOpacity: 0.2,
                  bottomLeftOpacity: 0.2,
                  bottomMiddleOpacity: 0.2,
                  bottomRightOpacity: 0.2,
                })
              }
              onMouseLeave={() =>
                !isTopSkew && setSVGParams(userRefractValues || initialRefractValues)
              }
              onClick={() => {
                if (isTopSkew) {
                  setSVGParams(userRefractValues || initialRefractValues);
                  setIsTopSkew(false);
                } else {
                  setSVGParams({
                    topLeftOpacity: 0.2,
                    topMiddleOpacity: 0.2,
                    bottomLeftOpacity: 0.2,
                    bottomMiddleOpacity: 0.2,
                    bottomRightOpacity: 0.2,
                  });
                  setIsTopSkew(true);
                }
              }}
            />
            {!isTopSkew && (
              <>
                <Button
                  position={'absolute'}
                  left='60x'
                  bottom='0'
                  height='60x'
                  width='72x'
                  color='action'
                  onMouseEnter={() =>
                    !isTopSkew &&
                    setSVGParams({
                      topLeftOpacity: 0.2,
                      topMiddleOpacity: 0.2,
                      topRightOpacity: 0.2,
                      bottomMiddleOpacity: 0.2,
                      bottomRightOpacity: 0.2,
                    })
                  }
                  onMouseLeave={() =>
                    !isTopSkew && setSVGParams(userRefractValues || initialRefractValues)
                  }
                  onClick={() => {
                    if (isTopSkew) {
                      setSVGParams(userRefractValues || initialRefractValues);
                      setIsTopSkew(false);
                    } else {
                      setSVGParams({
                        topLeftOpacity: 0.2,
                        topMiddleOpacity: 0.2,
                        topRightOpacity: 0.2,
                        bottomMiddleOpacity: 0.2,
                        bottomRightOpacity: 0.2,
                      });
                      setIsTopSkew(true);
                    }
                  }}
                />
                <Button
                  position={'absolute'}
                  left='60x'
                  height='60x'
                  bottom='0'
                  marginLeft='72x'
                  width='72x'
                  color='action'
                  onMouseEnter={() =>
                    !isTopSkew &&
                    setSVGParams({
                      topLeftOpacity: 0.2,
                      topRightOpacity: 0.2,
                      bottomLeftOpacity: 0.2,
                      topMiddleOpacity: 0.2,
                      bottomRightOpacity: 0.2,
                    })
                  }
                  onMouseLeave={() =>
                    !isTopSkew && setSVGParams(userRefractValues || initialRefractValues)
                  }
                  onClick={() => {
                    if (isTopSkew) {
                      setSVGParams(userRefractValues || initialRefractValues);
                      setIsTopSkew(false);
                    } else {
                      setSVGParams({
                        topLeftOpacity: 0.2,
                        topRightOpacity: 0.2,
                        bottomLeftOpacity: 0.2,
                        topMiddleOpacity: 0.2,
                        bottomRightOpacity: 0.2,
                      });
                      setIsTopSkew(true);
                    }
                  }}
                />
                <Button
                  position={'absolute'}
                  right='60x'
                  bottom='0'
                  height='60x'
                  width='84x'
                  color='action'
                  onMouseEnter={() =>
                    !isTopSkew &&
                    setSVGParams({
                      topLeftOpacity: 0.2,
                      topMiddleOpacity: 0.2,
                      topRightOpacity: 0.2,
                      bottomLeftOpacity: 0.2,
                      bottomMiddleOpacity: 0.2,
                    })
                  }
                  onMouseLeave={() =>
                    !isTopSkew && setSVGParams(userRefractValues || initialRefractValues)
                  }
                  onClick={() => {
                    if (isTopSkew) {
                      setSVGParams(userRefractValues || initialRefractValues);
                      setIsTopSkew(false);
                    } else {
                      setSVGParams({
                        topLeftOpacity: 0.2,
                        topMiddleOpacity: 0.2,
                        topRightOpacity: 0.2,
                        bottomLeftOpacity: 0.2,
                        bottomMiddleOpacity: 0.2,
                      });
                      setIsTopSkew(true);
                    }
                  }}
                />
              </>
            )}
          </Box>
        )}
      </Flex>
    </>
  );
};

export default Refract;
