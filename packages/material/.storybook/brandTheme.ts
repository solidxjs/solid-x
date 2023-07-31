import { create, type ThemeVars } from '@storybook/theming';
import { refDefaults } from '@solid-x/tokens';

const light = create({
  base: 'light',
  brandTitle: 'solid-x',
  brandImage: './logo.png',
  appBg: refDefaults.palette.neutral[98],
  colorPrimary: refDefaults.palette.primary[40],
  colorSecondary: refDefaults.palette.secondary[40],
});

const dark = create({
  base: 'dark',
  brandTitle: 'solid-x',
  brandImage: './logo-dark.png',
  appBg: refDefaults.palette.neutral[6],
  colorPrimary: refDefaults.palette.primary[80],
  colorSecondary: refDefaults.palette.secondary[80],
});

const themes: { dark: ThemeVars, light: ThemeVars } = { dark, light };

export default themes;
