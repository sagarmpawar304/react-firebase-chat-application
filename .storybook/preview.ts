// .storybook/preview.js

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/index.scss';

export const parameters = {
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
};
