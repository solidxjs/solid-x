import { create } from '@storybook/theming';
import { refTokens } from '@solid-x/tokens';

const light = create({
  base: 'light',
  brandTitle: 'solid-x',
  brandImage: './logo.png',
  appBg: refTokens.palette.neutral[98],
  colorPrimary: refTokens.palette.primary[40],
  colorSecondary: refTokens.palette.secondary[40]
});

const dark = create({
  base: 'dark',
  brandTitle: 'solid-x',
  brandImage: './logo-dark.png',
  appBg: refTokens.palette.neutral[6],
  colorPrimary: refTokens.palette.primary[80],
  colorSecondary: refTokens.palette.secondary[80]
});

const themes = { dark, light };

export default themes;
