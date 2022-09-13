import { vars } from 'theme/vars.css';

export const getBorderColor = (index: number) => {
  type backgroundType = keyof typeof vars.background;
  const backgrounds: backgroundType[] = ['red', 'blue', 'green'];
  return backgrounds[index % backgrounds.length];
};
