module.exports = {
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
      '3xl': '1536px',
    },
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F8A404',
        },
        accent: {
          light: '#2D77ED',
          dark: '#2E7EFF',
        },
        red: {
          light: '#DA4239D',
          dark: '#E43E34',
        },
        'gray-1': {
          light: 'rgba(0, 0, 0, 0.01)',
          dark: 'rgba(255, 255, 255, 0.08)',
        },
        'gray-2': {
          light: 'rgba(0, 0, 0, 0.02)',
          dark: 'rgba(255, 255, 255, 0.01)',
        },
        'gray-3': {
          light: 'rgba(0, 0, 0, 0.025)',
          dark: 'rgba(255, 255, 255, 0.04)',
        },
        'gray-4': {
          light: 'rgba(0, 0, 0, 0.03)',
          dark: 'rgba(255, 255, 255, 0.08)',
        },
        'gray-5': {
          light: 'rgba(0, 0, 0, 0.04)',
          dark: 'rgba(255, 255, 255, 0.08)',
        },
        'gray-6': {
          light: 'rgba(0, 0, 0, 0.06)',
          dark: 'rgba(255, 255, 255, 0.16)',
        },
        'gray-7': {
          light: 'rgba(0, 0, 0, 0.10)',
          dark: 'rgba(255, 255, 255, 0.16)',
        },
        'gray-8': {
          light: 'rgba(0, 0, 0, 0.12)',
          dark: 'rgba(255, 255, 255, 0.2)',
        },
        'gray-9': {
          dark: 'rgba(255, 255, 255, 0.12)',
        },
        bg: {
          primary: '#0A0A0A',
          secondary: '#1F1F1F',
        },
        midnight: '#080808',
        wheat: '#FFFFFF80',
        label: {
          primary: {
            light: 'rgba(0, 0, 0, 0.9)',
            dark: 'rgba(255, 255, 255, 0.9)',
          },
          secondary: {
            light: 'rgba(0, 0, 0, 0.6)',
            dark: 'rgba(255, 255, 255, 0.4)',
          },
          tertiary: {
            light: 'rgba(0, 0, 0, 0.3)',
            dark: 'rgba(255, 255, 255, 0.3)',
          },
        },
      },
      padding: {
        'lg-x': '20px',
        'lg-y': '12px',
        'md-y': '8px',
        'md-x': '16px',
      },
      borderRadius: {
        '10px': '10px',
        '8px': '8px',
      },
      opacity: {
        92: '.92',
        84: '.84',
      },
      fontFamily: {
        clarendon: ['Clarendon', 'sans-serif'],
        cheltenham: ['ITC Cheltenham', 'sans-serif'],
      },
      backgroundImage: {
        'insta-radial':
          'radial-gradient(92.18% 99.11% at 26.56% 107.7%, #FFDD55 0%, #FFDD55 10%, #FF543E 50%, #C837AB 100%)',
        'whatsapp-linear': 'linear-gradient(0deg, #20B038 0%, #60D66A 100%)',
        'right-shadow':
          'linear-gradient(270deg, #080808 0%, rgba(8, 8, 8, 0) 35.94%, rgba(8, 8, 8, 0) 100%)',
        'left-shadow':
          'linear-gradient(270deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
}
