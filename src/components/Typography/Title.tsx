import { ElementType, ReactNode } from 'react';
import clsx from 'clsx';
import * as styles from './typography.css';
import { Box, BoxProps } from '../../theme/components';
import { sprinkles, Sprinkles } from '../../theme/sprinkles.css';

export type TitleSizeLevel = '0' | '1' | '2' | '3' | '4' | '5';
export type ResponsiveTitleSizeLevel = {
  sm: TitleSizeLevel;
  md?: TitleSizeLevel;
  lg?: TitleSizeLevel;
  xl?: TitleSizeLevel;
  xxl?: TitleSizeLevel;
};

const getTitleComponent = (level: ResponsiveTitleSizeLevel | TitleSizeLevel | any) => {
  if (level === '0' || level === '1' || level?.sm === '0' || level?.sm === '1') {
    return 'h1';
  }
  if (level === '2' || level?.sm === '2') {
    return 'h2';
  }
  if (level === '3' || level?.sm === '3') {
    return 'h3';
  }
  if (level === '4' || level?.sm === '4') {
    return 'h4';
  }
  if (level === '5' || level?.sm === '5') {
    return 'h5';
  }
  if (level === '6' || level?.sm === '6') {
    return 'h6';
  }

  throw new Error('No valid heading level');
};

export interface TitleProps extends BoxProps {
  children: ReactNode;
  level?: TitleSizeLevel | any;
  align?: Sprinkles['textAlign'];
  color?: Sprinkles['color'];
  component?: ElementType;
  className?: string;
  special?: boolean;
  weight?: keyof typeof styles.weight;
}

export const useTitleStyles = (
  level: TitleSizeLevel | any,
  align?: Sprinkles['textAlign'],
  color: Sprinkles['color'] = 'primary',
  special?: boolean,
  weight?: keyof typeof styles.weight
) =>
  clsx(
    special ? styles.fonts['specialTitle'] : styles.fonts['title'],
    weight && styles.weight[weight],
    sprinkles({
      textAlign: align,
      color: color,
      fontSize: {
        sm: level?.sm || level,
        md: level?.md && level.md,
        lg: level?.lg && level.lg,
        xl: level?.xl && level.xl,
        xxl: level?.xxl && level.xxl,
      },
      fontWeight: {
        sm: level?.sm || level,
        md: level?.md && level.md,
        lg: level?.lg && level.lg,
        xl: level?.xl && level.xl,
        xxl: level?.xxl && level.xxl,
      },
      letterSpacing: {
        sm: level?.sm || level,
        md: level?.md && level.md,
        lg: level?.lg && level.lg,
        xl: level?.xl && level.xl,
        xxl: level?.xxl && level.xxl,
      },
      lineHeight: {
        sm: level?.sm || level,
        md: level?.md && level.md,
        lg: level?.lg && level.lg,
        xl: level?.xl && level.xl,
        xxl: level?.xxl && level.xxl,
      },
    })
  );

export const Title = ({
  level = '1',
  component,
  align,
  color,
  children,
  className,
  special,
  weight,
  ...restProps
}: TitleProps) => {
  return (
    <Box
      component={component || getTitleComponent(level)}
      className={clsx(useTitleStyles(level, align, color, special, weight), className)}
      {...restProps}
    >
      {children}
    </Box>
  );
};
