/**
 * Generates sys motion tokens.
 *
 * @returns The sys motion tokens
 */
const motion = () => ({
  duration: {
    short: {
      1: '50ms',
      2: '100ms',
      3: '150ms',
      4: '200ms',
    },
    medium: {
      1: '250ms',
      2: '300ms',
      3: '350ms',
      4: '400ms',
    },
    long: {
      1: '450ms',
      2: '500ms',
      3: '550ms',
      4: '600ms',
    },
    xlong: {
      1: '700ms',
      2: '800ms',
      3: '900ms',
      4: '1000ms',
    },
  },
  easing: {
    linear: 'cubic-bezier(0, 0, 1, 1)',
    standardAccelerate: 'cubic-bezier(0.3, 0, 1, 1)',
    standard: 'cubic-bezier(0.2, 0, 0, 1)',
    standardDecelerate: 'cubic-bezier(0, 0, 0, 1)',
    emphasizedAccelerate: 'cubic-bezier(0.3, 0, 0.8, 0.15)',
    emphasized: 'cubic-bezier(0.2, 0, 0, 1)',
    emphasizedDecelerate: 'cubic-bezier(0.05, 0.7, 0.1, 1)',
    legacyAccelerate: 'cubic-bezier(0.4, 0, 0.2, 1)',
    legacy: 'cubic-bezier(0, 0, 0.2, 1)',
    legacyDecelerate: 'cubic-bezier(0, 0, 0.2, 1)',
  },
  path: '', // TODO: motion_path is not supported
});

export default motion;
