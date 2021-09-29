const dark = {
  colors: {
    white: '#FFFFFF',
    primary: '#EA7C69',
    secondary: '#9288E0',
    textLighter: '#E0E6E9',
    text: {
      dark: '#3B5162',
      gray: '#889898',
      light: '#ABBBC2',
      lighter: '#E0E6E9',
    },
    base: {
      lightBG: '#FAFAFA',
      darkLine: '#393C49',
      darkBG: '#252836',
      darkerBG: '#1F1D2B',
      formBG: '#2D303E',
      green: '#6BE2BE3D',
      purple: '#9290FE33',
      orange: '#FFB57233',
    },
    accent: {
      green: '#50D1AA',
      red: '#FF7CA3',
      orange: '#FFB572',
      blue: '#65B0F6',
      purple: '#9290FE',
    },
  },
};

export type Theme = typeof dark;
const theme: Theme = dark;
export default theme;
