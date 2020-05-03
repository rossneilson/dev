import Typography from "typography"
import theme from "typography-theme-fairy-gates"
import "typeface-sacramento"

theme.overrideThemeStyles = () => ({
  h3: {
    color: "#76aed7",
    marginLeft: "3%",
    borderBottom: "2px solid",
    borderBottomColor: "#f2a319",
    width: 260,
    fontSize: "130%",
  },
})

const typography = new Typography(theme)

export default typography
