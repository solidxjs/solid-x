import { refTokens, sysTokens } from '@solid-x/tokens';
import { createGlobalTheme } from '@vanilla-extract/css';
import { THEME_CLASS } from './theme';
import { ref as refContract, sys as sysContract } from './theme.vars.css';

createGlobalTheme(':root', refContract.palette, refTokens.palette);
createGlobalTheme(':root', refContract.typeface, refTokens.typeface);

createGlobalTheme(':root', sysContract.color, sysTokens.color(refContract, sysContract));
createGlobalTheme(':root', sysContract.elevation, sysTokens.elevation());
createGlobalTheme(':root', sysContract.motion, sysTokens.motion());
createGlobalTheme(':root', sysContract.shape, sysTokens.shape());
createGlobalTheme(':root', sysContract.typescale, sysTokens.typescale(refContract));

/**
 * Dark theme support
 */
createGlobalTheme(
  `.${THEME_CLASS.DARK_THEME}`,
  sysContract.color,
  sysTokens.colorDark(refContract, sysContract)
);
