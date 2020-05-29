import Typography from "typography"
import theme from "typography-theme-fairy-gates"
import "typeface-sacramento"
import "typeface-space-mono"

theme.overrideThemeStyles = () => ({
  h3: {
    color: "#76aed7",
    marginLeft: "3%",
    borderBottom: "2px solid",
    borderBottomColor: "#f2a319",
    paddingBottom: "15px",
    marginRight: "20%",
    fontSize: "180%",
  },
})

const typography = new Typography(theme)

export default typography
