import React from "react"
import { ThemeProvider } from "styled-components"
import "@fontsource/noto-sans-jp"

import { lightTheme, GlobalStyle } from "../theme"

const Layout = props => {
  const theme = lightTheme

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isDarkTheme={true} />

      {props.children}
    </ThemeProvider>
  )
}

export default Layout
