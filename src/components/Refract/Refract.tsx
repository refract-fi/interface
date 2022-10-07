import clsx from 'clsx';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { refractPhaseState, useRefractPhaseActions } from 'states/refractPhaseState';
import { Box, Flex } from 'theme/components';
import * as styles from './Refract.css';
import { animated, config, easings, useSpring } from 'react-spring';
import Button from 'components/Button/Button';

interface RefractProps {
  page: string;
}

const initialRefractValues = {
  topLeftOffset: 0.5,
  topLeftOpacity: 1,

  topMiddleOffset: 0.5,
  topMiddleOpacity: 1,

  topRightOffset: 0.5,
  topRightOpacity: 1,

  bottomLeftOffset: 0.5,
  bottomLeftOpacity: 1,

  bottomMiddleOffset: 0.5,
  bottomMiddleOpacity: 1,

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

  const { isTopSkew } = useRecoilValue(refractPhaseState);
  const { setIsTopSkew } = useRefractPhaseActions();

  const [
    {
      topLeftOffset,
      topLeftOpacity,
      topMiddleOffset,
      topMiddleOpacity,
      topRightOffset,
      topRightOpacity,
      bottomLeftOffset,
      bottomLeftOpacity,
      bottomMiddleOffset,
      bottomMiddleOpacity,
      bottomRightOffset,
      bottomRightOpacity,
    },
    setSVGParams,
  ] = useSpring(
    () => ({
      from: {
        topLeftOffset: 0,
        topLeftOpacity: 0,
        topMiddleOffset: 0,
        topMiddleOpacity: 0,
        topRightOffset: 0,
        topRightOpacity: 0,
        bottomLeftOffset: 0,
        bottomLeftOpacity: 0,
        bottomMiddleOffset: 0,
        bottomMiddleOpacity: 0,
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
        // await next({
        //   topLeftOffset: 0.5,
        //   topLeftOpacity: 1,
        //   topMiddleOffset: 0.5,
        //   topMiddleOpacity: 1,
        //   topRightOffset: 0.5,
        //   topRightOpacity: 1,
        //   bottomLeftOffset: 0.5,
        //   bottomLeftOpacity: 1,
        //   bottomMiddleOffset: 0.5,
        //   bottomMiddleOpacity: 1,
        //   bottomRightOffset: 0.5,
        //   bottomRightOpacity: 1,
        // });
      },
      config: {
        friction: 50,
        duration: 1700,
        easing: easings.easeInOutSine,
      },
      loop: {
        reverse: true,
      },
    }),
    []
  );

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
    <>
      <Flex
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
              <rect width='900' height='450' fill='black' />
              <animated.ellipse
                cx={topLeftPosX}
                cy={topLeftPosY}
                rx={topLeftScale * 100}
                ry={topLeftScale * 100}
                fill='url(#top_left_gradient)'
                filter={topLeftOpacity.to(v => `opacity(${v})`)}
              />
              <animated.ellipse
                cx={topMiddlePosX}
                cy={topMiddlePosY}
                rx={topMiddleScale * 100}
                ry={topMiddleScale * 100}
                fill='url(#top_middle_gradient)'
                filter={topMiddleOpacity.to(v => `opacity(${v})`)}
              />
              <animated.ellipse
                cx={topRightPosX}
                cy={topRightPosY}
                rx={topRightScale * 100}
                ry={topRightScale * 100}
                fill='url(#top_right_gradient)'
                filter={topRightOpacity.to(v => `opacity(${v})`)}
              />
              <animated.ellipse
                cx={bottomLeftPosX}
                cy={bottomLeftPosY}
                rx={bottomLeftScale * 100}
                ry={bottomLeftScale * 100}
                fill='url(#bottom_left_gradient)'
                filter={bottomLeftOpacity.to(v => `opacity(${v})`)}
              />
              <animated.ellipse
                cx={bottomMiddlePosX}
                cy={bottomMiddlePosY}
                rx={bottomMiddleScale * 100}
                ry={bottomMiddleScale * 100}
                fill='url(#bottom_middle_gradient)'
                filter={bottomMiddleOpacity.to(v => `opacity(${v})`)}
              />
              <animated.ellipse
                cx={bottomRightPosX}
                cy={bottomRightPosY}
                rx={bottomRightScale * 100}
                ry={bottomRightScale * 100}
                fill='url(#bottom_right_gradient)'
                filter={bottomRightOpacity.to(v => `opacity(${v})`)}
              />
            </g>
            <defs>
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
                <stop stopColor='#FF4343' />
                <animated.stop
                  offset={topLeftOffset.to(v => v)}
                  stopColor='#FF4343'
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
                <stop stopColor='#0024FF' />
                <animated.stop
                  offset={topMiddleOffset.to(v => v)}
                  stopColor='#0024FF'
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
                <stop stopColor='#FFAB0F' />
                <animated.stop
                  offset={topRightOffset.to(v => v)}
                  stopColor='#FFAB0F'
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
                <stop stopColor='#886FF4' />
                <animated.stop
                  offset={bottomLeftOffset.to(v => v)}
                  stopColor='#886FF4'
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
                <stop stopColor='#9AF46F' />
                <animated.stop
                  offset={bottomMiddleOffset.to(v => v)}
                  stopColor='#9AF46F'
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
                <stop stopColor='#88E3F0' />
                <animated.stop
                  offset={bottomRightOffset.to(v => v)}
                  stopColor='#88E3F0'
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
        {/* <Button
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
          onMouseLeave={() => !isTopSkew && setSVGParams(initialRefractValues)}
          onClick={() => {
            if (isTopSkew) {
              setSVGParams(initialRefractValues);
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
          onMouseLeave={() => !isTopSkew && setSVGParams(initialRefractValues)}
          onClick={() => {
            if (isTopSkew) {
              setSVGParams(initialRefractValues);
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
          onMouseLeave={() => !isTopSkew && setSVGParams(initialRefractValues)}
          onClick={() => {
            if (isTopSkew) {
              setSVGParams(initialRefractValues);
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
              onMouseLeave={() => !isTopSkew && setSVGParams(initialRefractValues)}
              onClick={() => {
                if (isTopSkew) {
                  setSVGParams(initialRefractValues);
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
              onMouseLeave={() => !isTopSkew && setSVGParams(initialRefractValues)}
              onClick={() => {
                if (isTopSkew) {
                  setSVGParams(initialRefractValues);
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
              onMouseLeave={() => !isTopSkew && setSVGParams(initialRefractValues)}
              onClick={() => {
                if (isTopSkew) {
                  setSVGParams(initialRefractValues);
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
            /> */}
        {/* </>
        )} */}
      </Flex>
    </>
  );
};

export default Refract;
