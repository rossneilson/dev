import { createGlobalStyle } from "styled-components"
import { mix } from "polished"

const white = "#fff"
const black = "rgb(0,0,0)"
const primary = "#2196f3"
const secondary = "#fab601"
const success = "rgb(16,158,98)"
const fail = "#eb4c34"
const codeBoxLight = "#fafafa"

const white500 = white
const white600 = mix(0.03, black, white)
const white700 = mix(0.1, black, white)
const white800 = mix(0.2, black, white)
const white900 = mix(0.3, black, white)

const black50 = mix(0.5, white, black)
const black100 = mix(0.4, white, black)
const black200 = mix(0.3, white, black)
const black300 = mix(0.2, white, black)
const black400 = mix(0.1, white, black)
const black500 = black

const primary950 = mix(0.85, black, primary)
const primary900 = mix(0.8, black, primary)
const primary800 = mix(0.6, black, primary)
const primary700 = mix(0.4, black, primary)
const primary600 = mix(0.2, black, primary)
const primary500 = primary
const primary400 = mix(0.2, white, primary)
const primary300 = mix(0.4, white, primary)
const primary200 = mix(0.6, white, primary)
const primary100 = mix(0.8, white, primary)
const primary50 = mix(0.9, white, primary)

const secondary950 = mix(0.85, black, secondary)
const secondary900 = mix(0.8, black, secondary)
const secondary800 = mix(0.6, black, secondary)
const secondary700 = mix(0.4, black, secondary)
const secondary600 = mix(0.2, black, secondary)
const secondary500 = secondary
const secondary400 = mix(0.2, white, secondary)
const secondary300 = mix(0.4, white, secondary)
const secondary200 = mix(0.6, white, secondary)
const secondary100 = mix(0.8, white, secondary)

const success900 = mix(0.8, black, success)
const success800 = mix(0.6, black, success)
const success700 = mix(0.4, black, success)
const success600 = mix(0.2, black, success)
const success500 = success
const success400 = mix(0.2, white, success)
const success300 = mix(0.4, white, success)
const success200 = mix(0.6, white, success)
const success100 = mix(0.8, white, success)

const fail900 = mix(0.8, black, fail)
const fail800 = mix(0.6, black, fail)
const fail700 = mix(0.4, black, fail)
const fail600 = mix(0.2, black, fail)
const fail500 = fail
const fail400 = mix(0.2, white, fail)
const fail300 = mix(0.4, white, fail)
const fail200 = mix(0.6, white, fail)
const fail100 = mix(0.8, white, fail)

const baseColors = {
  white,
  white500,
  white600,
  white700,
  white800,
  white900,
  black,
  black500,
  black400,
  black300,
  black200,
  black100,
  black50,
  boxShadow: "rgba(0,0,0,0.12)",
  boxShadowHover: "rgba(0,0,0,0.24)",
  secondary: "#b2b2b2", // TODO replace
  success900,
  success800,
  success700,
  success600,
  success,
  success500,
  success400,
  success300,
  success200,
  success100,
  fail900,
  fail800,
  fail700,
  fail600,
  fail,
  fail500,
  fail400,
  fail300,
  fail200,
  fail100,
  warning: secondary100,
  warningLink: secondary700,
  warningLinkHover: secondary900,
  infoBanner: primary50,
}

// TODO replace random variables w/ baseColor variables
const lightColors = {
  buttonColor: primary600,
  buttonHoverColor: secondary,
  ghostCardBackground: white,
  ghostCardGhost: white600,
  secondaryButtonBackgroundActive: white700,
  primary: primary,
  primary950: primary950,
  primary900: primary900,
  primary800: primary800,
  primary700: primary700,
  primary600: primary600,
  primary500: primary500,
  primary400: primary400,
  primary300: primary300,
  primary200: primary200,
  primary100: primary100,
  primaryHover: primary600,
  primaryActive: primary600,
  secondary: secondary,
  secondary950: secondary950,
  secondary900: secondary900,
  secondary800: secondary800,
  secondary700: secondary700,
  secondary600: secondary600,
  secondary500: secondary500,
  secondary400: secondary400,
  secondary300: secondary300,
  secondary200: secondary200,
  secondary100: secondary100,
  secondaryHover: secondary600,
  secondaryActive: secondary600,
  lightBorder: "#ececec",
  priceCardBorder: "#ececec",
  priceCardBorderNegative: "#ececec",
  searchBorder: "#7f7f7f",
  searchBackground: white,
  searchBackgroundEmpty: "#f2f2f2",
  searchResultText: "#33363d",
  searchResultBackground: "#f1f3f5",
  selectHover: primary100,
  selectActive: primary200,
  dropdownBackground: white,
  dropdownBackgroundHover: "#f2f2f2",
  dropdownBorder: "#e5e5e5",
  text: "#333",
  text200: "#666",
  text300: "#4c4c4c",
  textTableOfContents: "#7f7f7f",
  background: white,
  border: white700,
  grayBackground: "#444444",
  warning: secondary100,
  warningLink: secondary700,
  warningLinkHover: secondary900,
  lightWarning: "#ff3a003b",
  infoLink: primary800,
  infoLinkHover: primary900,
}

const lightThemeColors = Object.assign({}, baseColors, lightColors)
const darkThemeColors = Object.assign({}, baseColors)

const theme = {
  isDark: false, // Overwritten in Object.assign
  colors: {}, // Overwritten in Object.assign
  fontSizes: {
    // based on typical browser default font size of 16px
    xs: "0.75rem", // 12px
    s: "0.875rem", // 14px
    m: "1rem", // 16px
    r: "1.125rem", // 18px
    l: "1.5rem", // 20px
    xl: "2rem", // 24px
  },
  breakpoints: {
    xs: "320px",
    s: "414px",
    m: "768px",
    l: "1024px",
    xl: "1440px", // Used as the max-width
  },
  variables: {
    maxPageWidth: "1504px", // xl breakpoint (1440px) + 72px (2rem padding on each side)
    navHeight: "4.75rem",
    navBannerHeightDesktop: "134px", // 76px + 58px
    navBannerHeightTablet: "159px", // 76px + 83px
    navBannerHeightMobile: "184px", // 76px + 108px
    navSubNavHeightDesktop: "134px", // 76px + 58px
    navSideNavHeightMobile: "140px", // 76px + 64px
  },
}

export const lightTheme = Object.assign(
  {},
  theme,
  { isDark: false },
  { colors: lightThemeColors }
)
export const darkTheme = Object.assign({}, theme, { isDark: true })

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
    margin: 0;
    padding: 0;
    font-family: Noto Sans JP;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    color: #036bbd;
    font-weight: 600;
    text-decoration: none;
  }

  a:hover {
    color: inherit;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #fab600; 
  }

  ::-webkit-scrollbar-track {
    background: #2096f3c7;
  }

  .table-of-contents {
    margin-bottom: 10px;
    list-style: none;
    color: #808483;
  }
  .table-of-contents ul {
    background-color: #53aef62e;
    list-style: none;
    max-width: 500px;
    padding: 50px 10%;
    margin: 0px;
    border-radius: 4px;
  }
  .table-of-contents li {
    border-bottom: 1px solid #8080802e;
  }
  `
