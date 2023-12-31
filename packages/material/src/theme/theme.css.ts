import { refDefaults, sysDefaults } from '@solid-x/tokens';
import { createGlobalTheme } from '@vanilla-extract/css';
import { SELECTORS } from './theme';
import { ref as refContract, sys as sysContract } from './theme.tokens.css';

createGlobalTheme(':root', refContract.palette, refDefaults.palette);
createGlobalTheme(':root', refContract.typeface, refDefaults.typeface);

createGlobalTheme(':root', sysContract.color, sysDefaults.color(refContract));
createGlobalTheme(':root', sysContract.elevation, sysDefaults.elevation());
createGlobalTheme(':root', sysContract.motion, sysDefaults.motion());
createGlobalTheme(':root', sysContract.shape, sysDefaults.shape());
createGlobalTheme(':root', sysContract.state, sysDefaults.state());
createGlobalTheme(':root', sysContract.typescale, sysDefaults.typescale(refContract));

/**
 * Dark theme support
 */
createGlobalTheme(SELECTORS.DARK_THEME, sysContract.color, sysDefaults.colorDark(refContract));
