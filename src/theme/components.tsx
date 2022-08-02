import { createElement, AllHTMLAttributes, ElementType } from "react";
import { sprinkles, Sprinkles } from "./sprinkles.css";
import * as resetStyles from "./reset.css";
import clsx from "clsx";

export interface BoxProps
  extends Omit<
      AllHTMLAttributes<HTMLElement>,
      "content" | "height" | "translate" | "color" | "width" | "cursor" | "size"
    >,
    Sprinkles {
  component?: ElementType;
}

export const Box = ({
  component = "div",
  className,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  margin,
  marginX,
  marginY,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  display,
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap,
  flexGrow,
  flexShrink,
  borderRadius,
  backgroundColor,
  position,
  top,
  bottom,
  left,
  right,
  background,
  color,
  width,
  zIndex,
  opacity,
  pointerEvents,
  cursor,
  textAlign,
  gap,
  fill,
  flex,
  height,
  whiteSpace,
  alignSelf,
  listStyleType,
  ...restProps
}: BoxProps) => {
  const atomClasses = clsx(
    resetStyles.element[component as keyof typeof resetStyles.element],
    sprinkles({
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      margin,
      marginX,
      marginY,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      display,
      alignItems,
      justifyContent,
      flexDirection,
      flexWrap,
      flexGrow,
      flexShrink,
      borderRadius,
      position,
      top,
      bottom,
      left,
      right,
      background,
      backgroundColor,
      color,
      width,
      zIndex,
      opacity,
      pointerEvents,
      cursor,
      textAlign,
      gap,
      fill,
      flex,
      height,
      whiteSpace,
      alignSelf,
      listStyleType,
    }),
    className
  );

  return createElement(component, { className: atomClasses, ...restProps });
};

export const Flex = ({
  display = "flex",
  children,
  ...restProps
}: BoxProps) => (
  <Box display={display} {...restProps}>
    {children}
  </Box>
);

export const FlexCol = ({
  display = "flex",
  flexDirection = "column",
  children,
  ...restProps
}: BoxProps) => (
  <Box display={display} flexDirection={flexDirection} {...restProps}>
    {children}
  </Box>
);

export const FlexRow = ({
  display = "flex",
  flexDirection = "row",
  children,
  ...restProps
}: BoxProps) => (
  <Box display={display} flexDirection={flexDirection} {...restProps}>
    {children}
  </Box>
);
