const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./**/*.liquid', './src/**/*.{js,ts}', './src/tailwindcss.html'],
  theme: {
    screens: {
      desktop: { min: '1025px' },
      laptop: { max: '1300px' },
      tablet: { max: '1024px' },
      mobile: { max: '720px' },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: {
        DEFAULT: 'rgba(var(--color-black, 1)',
        54: 'rgba(var(--color-pale-gray, .54)',
        30: 'rgba(var(--color-black), .3)',
      },
      grey: {
        DEFAULT: 'rgba(var(--color-gray, 1)',
        pale: 'rgba(var(--color-pale-gray, 1)',
      },
      hairline: {
        DEFAULT: 'rgba(var(--color-hairline, 1)',
      },
      white: {
        DEFAULT: 'rgba(var(--color-white, 1)',
      },
      red: {
        DEFAULT: 'rgba(var(--color-red, 1)',
      },
      highlight: {
        DEFAULT: 'rgba(var(--color-highlight, 1)',
      },

      /* Helper classes that leverage Shopify color_scheme */
      'scheme-text': 'var(--text)',
      'scheme-links': 'var(--links)',
      'scheme-icons': 'var(--icons)',
      'scheme-background': 'var(--background)',
      'scheme-contrast': 'var(--contrast)',
      'scheme-border': 'var(--border, --color-hairline)',
      'scheme-error': 'var(--error, --color-red)',

      'primary-button-background': 'var(--primary-button-background)',
      'primary-button-border': 'var(--primary-button-border)',
      'primary-button-text': 'var(--primary-button-text)',
      'primary-button-background-hover': 'var(--primary-button-background-hover)',
      'primary-button-border-hover': 'var(--primary-button-border-hover)',
      'primary-button-text-hover': 'var(--primary-button-text-hover)',

      'secondary-button-background': 'var(--secondary-button-background)',
      'secondary-button-border': 'var(--secondary-button-border)',
      'secondary-button-text': 'var(--secondary-button-text)',
      'secondary-button-background-hover': 'var(--secondary-button-background-hover)',
      'secondary-button-border-hover': 'var(--secondary-button-border-hover)',
      'secondary-button-text-hover': 'var(--secondary-button-text-hover)',
    },
    fontFamily: {
      sans: [
        'aktiv-grotesk',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
      ],
      serif: [
        'PS Times',
        'Apple Garamond',
        'Baskerville',
        'Times New Roman',
        'Droid Serif',
        'Times',
        'Source Serif Pro',
        'serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
      ],
    },
    fontSize: {
      'heading-lg': ['var(--text-heading-lg)', '1.2em'],
      'heading-md': ['var(--text-heading-md)', '1.3em'],
      'heading-sm': ['var(--text-heading-sm)', '1.5em'],
      'heading-xs': ['var(--text-heading-xs)', '1.5em'],
      base: ['var(--text-base)', '1.5em'],
      md: ['var(--text-md)', '1.5em'],
      sm: ['var(--text-sm)', '1.5em'],
      xs: ['var(--text-xs)', '1.3em'],
      scrolling: ['var(--text-scrolling)', '1.5em'],
      'scrolling-lg': ['var(--text-scrolling-lg)', '1.5em'],
    },
    extend: {
      lineHeight: {
        tight: '1.2',
        snug: '1.3',
      },
      spacing: {
        grid: 'calc((100vw - var(--spacing-offset) * var(--offsets, 2) - var(--spacing-gutter) * (var(--columns, 12) - 1)) / var(--columns, 12))',
        /*
        drawer: 'calc((100vw - var(--spacing-offset) * 2 - var(--spacing-gutter) * (var(--columns, 12) - 1)) / var(--columns, 12) + var(--spacing-gutter) + var(--spacing-offset))',
        */
        header: 'var(--spacing-header)',
        'header-full': 'var(--combined-header-height)',
        'announcement-banner': 'var(--spacing-announcement-banner)',
        'mobile-nav': 'var(--spacing-mobile-nav)',
        gutter: 'var(--spacing-gutter)',
        'gutter-sm': 'var(--spacing-gutter-sm)',
        offset: 'var(--spacing-offset)',
        'product-info': 'var(--spacing-product-info-height)',
        'details-nav': 'var(--spacing-details-nav)',
        'cart-nav': 'var(--spacing-cart-nav)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'ticker-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'nudge-swipe': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        flash: {
          '0%': { opacity: 1 },
          '75%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'desktop-nav-height': {
          '0%': { height: 0, opacity: '0', visibility: 'hidden' },
          '100%': {
            height: 'calc(100dvh - var(--combined-header-height, --header-height))',
            opacity: '1',
            visibility: 'visible',
          },
        },
        accordion: {
          '0%': { 'grid-template-rows': '0fr', opacity: '0', visibility: 'hidden' },
          '100%': { 'grid-template-rows': '1fr', opacity: '1', visibility: 'visible' },
        },
      },
      animation: {
        ticker: 'ticker var(--ticker-speed, 30s) linear infinite',
        'ticker-reverse': 'ticker-reverse var(--ticker-speed, 30s) linear infinite',
        'nudge-swipe': 'nudge-swipe 1.5s ease-in-out forwards',
        flash: 'flash 1.5s ease infinite',
        'desktop-nav-height': 'desktop-nav-height 0.3s ease-in-out forwards',
        accordion: 'accordion 0.3s ease-in-out forwards',
      },
      aria: {
        current: 'current="true"',
      },
    },
    typography: {
      DEFAULT: {
        css: {
          color: 'inherit',
          'font-size': 'inherit',
        },
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('supports-hover', '@media (hover: hover)');
      addVariant('no-js', 'html.no-js &');
      addVariant('js', 'html.js &');
    }),
  ],
};
