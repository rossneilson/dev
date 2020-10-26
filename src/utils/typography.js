import Typography from "typography"
import theme from "typography-theme-moraga"

theme.overrideThemeStyles = () => ({
  h3: {
    color: "#76aed7",
    borderBottom: "2px solid",
    borderBottomColor: "#f2a319",
    paddingBottom: "10px",
    marginRight: "20%",
    marginTop: "20px",
    fontSize: "180%",
  },
})

const typography = new Typography(theme)

export default typography
