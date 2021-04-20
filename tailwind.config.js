module.exports = {
  purge: ['./**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grayscale: {
          100: '#333333',
          80: '#656565',
          60: '#BDBDBD',
          40: '#E0E0E0',
          5: '#EEEEEE',
          0: '#F7F7F7',
          white: '#FFFFFF',
          background: '#FAFAFA',
        },
        primary: {
          100: '#264653',
          90: '#325D6E',
          80: '#3E7388',
          70: '#4B8AA3',
          60: '#5F9DB6',
          50: '#7AADC2',
          40: '#94BDCE',
          30: '#AFCEDA',
          20: '#CADEE7',
          10: '#E4EFF3'
        },
        secondary: {
          100: '#F2CC8F',
          90: '#F3D19A',
          80: '#F5D6A5',
          70: '#F6DBB1',
          60: '#F7D0BC',
          50: '#F9E6C7',
          40: '#FAEBD2',
          30: '#FBF0DD',
          20: '#FCF5E9',
          10: '#FCF5E9',
        },
        category: {
          longevity: '#E1B07E',
          wellbeing: '#E5BE9E',
          skincare: '#CBC0AD',
          weightloss: '#86A397'
        },
        success: {
          100: '#5A7A4E',
          50: '#85AB77',
          5: '#E3F4DC'
        },
        warning: {
          100: '#CD6200',
          50: '#FF9838',
          5: '#FFDAB8'
        },
        alert: {
          100: '#A42308',
          50: '#E24A29',
          5: '#FBD6CF'
        }
      }
    },
    screens: {
      'xs': '420px',
      // => @media (min-width: 420px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
