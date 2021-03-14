import Typography from "typography"
import theme from "typography-theme-moraga"
// import "@fontsource  /noto-sans-jp"

theme.overrideThemeStyles = () => ({
  h3: {
    color: "#618eaf",
    borderBottom: "2px solid",
    borderBottomColor: "#f2a319",
    paddingBottom: "10px",
    marginRight: "20%",
    marginTop: "20px",
    fontSize: "1.8rem",
  },
})

const typography = new Typography(theme)

export default typography
