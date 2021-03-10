import { css } from 'styled-components';

const screenSizes = {
  smMobile: 320,
  lgMobile: 414,
  tablet: 834,
  desktop: 1112,
};

const sizes: any = {
  smallMobile: screenSizes.smMobile,
  largeMobile: screenSizes.lgMobile,
  tablet: screenSizes.tablet,
  desktop: screenSizes.desktop,
};

const sizesKeys = Object.keys(sizes);

type Media = {
  [k in keyof typeof sizes]: {
    min: (props: any) => any;
    max: (props: any) => any;
  };
};

const media = sizesKeys.reduce<Media>((acc, lable) => {
  acc[lable] = {
    min: (props: any) => css`
      @media (min-width: ${sizes[lable] / 16}em) {
        ${css`
          ${props}
        `}
      }
    `,
    max: (props: any) => css`
      @media (max-width: ${sizes[lable] / 16}em) {
        ${css`
          ${props}
        `}
      }
    `,
  };
  return acc;
}, {});

export default media;
