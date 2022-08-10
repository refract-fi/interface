import { ReactNode, ElementType } from 'react';
import clsx from 'clsx';
import { Box, BoxProps } from '../../theme/components';
import * as styles from './typography.css';
import { sprinkles, Sprinkles } from '../../theme/sprinkles.css';
import { text } from '../../theme/vars.css';

interface TextStyleProps {
  color?: Sprinkles['color'];
  weight?: keyof typeof styles.weight;
  align?: Sprinkles['textAlign'];
  baseline?: boolean;
  level?: keyof typeof text | any;
  className?: string;
}

export interface TextProps extends TextStyleProps, BoxProps {
  component?: ElementType;
  children: ReactNode;
}

export const useTextStyles = ({ level = 'b1', color, weight, align, className }: TextStyleProps) =>
  clsx(
    (level[0] === 'b' || (level?.sm && level?.sm[0] === 'b')) && styles.fonts['body'],
    (level[0] === 'f' || (level?.sm && level?.sm[0] === 'f')) && styles.fonts['func'],
    (level[0] === 'f' || (level?.sm && level?.sm[0] === 'f')) && styles.funcFont,
    sprinkles({
      color: color,
      textAlign: align,
      fontSize: {
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
    }),
    weight && styles.weight[weight],
    className
  );
export const Text = ({
  component = 'span',
  color,
  weight,
  align,
  baseline = true,
  level,
  children,
  className,
  ...restProps
}: TextProps) => (
  <Box
    component={component}
    className={useTextStyles({
      color,
      weight,
      level,
      align,
      baseline,
      className,
    })}
    {...restProps}
  >
    {children}
  </Box>
);

export default Text;
