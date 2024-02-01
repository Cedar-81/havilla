/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      // fontSize: {
      //   xs: ['0.75rem', { lineHeight: '1.2' }],  // 12px
      //   sm: ['0.9375rem', { lineHeight: '1.2' }], // 15px
      //   base: ['1.125rem', { lineHeight: '1.2' }], // 18px
      //   lg: ['1.375rem', { lineHeight: '1.2' }],  // 22px
      //   xl: ['1.625rem', { lineHeight: '1.2' }],  // 26px
      //   'h4': ['1.9375rem', { lineHeight: '1.2' }], // 31px
      //   'h3': ['2.3125rem', { lineHeight: '1.2' }], // 37px
      //   'h2': ['2.8125rem', { lineHeight: '1.2' }], // 45px
      //   'h1': ['3.375rem', { lineHeight: '1.2' }],  // 54px
      // },
      colors: {
        'brand-dark': '#091F44',
        'brand-light': '#02D8F0',
        'white': '#FFFFFF',
        'gray-dark': '#C5C5C5',
        'gray-light': '#F7F7F7',
        'black': '#2B2B2B',
      },
    }
  },
  plugins: []
};