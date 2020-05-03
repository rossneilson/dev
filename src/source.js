export default {
  "@global": {
    body: {
      fontFamily: "'Space Mono', Courier-New",
    },
    "@font-face": {
      fontFamily: "Space Mono",
      src: "url('https://fonts.googleapis.com/css?family=Space+Mono')",
      fontDisplay: "swap",
    },
    h3: {
      color: "#76aed7",
      marginLeft: "3%",
      borderBottom: "2px solid",
      borderBottomColor: "#f2a319",
      width: 260,
      fontSize: "130%",
    },
    // h1: {
    //   borderBottom: "2px solid",
    //   borderBottomColor: "#fab601",
    //   paddingBottom: 6,
    // },
    // a: {
    //   color: "inherit",
    //   textDecoration: "none",
    // },
    "@keyframes fadeIn": {
      "0%": {
        transform: "opacity(0)",
      },
      "50%": {
        transform: "opacity(0.3)",
      },
      "100%": {
        transform: "opacity(0.7)",
      },
    },
    // '.bg': {
    //   animation: '4s ease-out 0s 1 fadeIn',
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   flexDirection: 'column',
    //   background: 'url(./../cover.svg)',
    //   backgroundRepeat: 'no-repeat',
    //   textAlign: 'center',
    //   minHeight: '100vh',
    //   webkitBackgroundSize: 'cover',
    //   mozBackgroundSize: 'cover',
    //   oBackgroundSize: 'cover',
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center left'
    // },
    "@keyframes slideInFromRight": {
      "0%": {
        transform: "translateX(200%)",
      },
      "15%": {
        transform: "translateX(-10%)",
      },
      "20%": {
        transform: "translateX(0)",
      },
      "90%": {
        transform: "translateX(0)",
      },
      "93%": {
        transform: "translateX(-10%)",
      },
      "96%": {
        transform: "translateX(+20%)",
      },
      "100%": {
        transform: "translateX(0)",
      },
    },
    ".reactSwitch": {
      animation: "6s ease-out 0s 1 slideInFromRight",
      position: "fixed",
      zIndex: "999",
      padding: 15,
      right: "0",
    },
    "@keyframes slideInFromBottom": {
      "0%": {
        transform: "translateY(300%)",
      },
      "80%": {
        transform: "translateY(-10%)",
      },
      "100%": {
        transform: "translateY(0)",
      },
    },
    // ".centerText": {
    //   animation: "1.5s ease-out 0s 1 slideInFromBottom",
    //   color: "white",
    //   backgroundColor: "#2196f3",
    //   padding: "5% 2% 5% 2%",
    //   width: "45%",
    //   minWidth: 200,
    //   fontFamily: "'Sacramento', 'Kokoro', cursive",
    //   boxShadow:
    //     "0 10px 15px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)",
    // },
    ".aboutHeader": {
      fontFamily: "'Sacramento', 'Noto Sans JP', sans-serif",
      color: "#f57c00",
      padding: "1% 0% 0% 3%",
      height: 70,
      width: "97%",
      flexGrow: "2",
      backgroundColor: "#0069c0",
      borderBottom: "solid 1px #f57c00",
    },
    // ".card": {
    //   padding: 16,
    //   backgroundColor: "white",
    //   zIndex: "998",
    //   width: "50%",
    //   minHeight: "40%",
    //   minWidth: "275",
    //   margin: "30px 20px 5% 20px",
    //   left: "6%",
    //   flexGrow: "2",
    //   boxShadow:
    //     "4px 10px 8px 0 rgba(0, 0, 0, 0.4), 0 3px 5px 0 rgba(0, 0, 0, 0.4)",
    // },
    // ".enP": {
    //   marginTop: 40,
    //   lineHeight: "1.5",
    //   wordSpacing: 1,
    //   fontSize: "100%",
    // },
    // ".jpP": {
    //   marginTop: 40,
    //   fontSize: "129%",
    // },
    // ".aboutFlexContainer": {
    //   backgroundColor: "#76aed7",
    //   zIndex: "998",
    //   position: "relative",
    //   display: "flex",
    //   flexWrap: "wrap",
    //   maxWidth: "100%",
    //   maxHeight: "100%",
    //   overflow: "hidden",
    // },
    // ".rightWrapper": {
    //   zIndex: "998",
    //   margin: "auto",
    //   paddingTop: 20,
    //   maxWidth: "100%",
    //   maxHeight: 900,
    // },
    // ".profile": {
    //   zIndex: "998",
    //   margin: "auto",
    //   transform: "scale(0.95)",
    //   maxWidth: "100%",
    //   maxHeight: 700,
    //   transition: "0.5s filter linear",
    // },
    // ".progressBar": {
    //   width: "90%",
    //   padding: 10,
    //   paddingLeft: 20,
    //   paddingBottom: 40,
    // },
    // ".wholeBar": {
    //   display: "flex",
    //   flexWrap: "wrap",
    //   height: 50,
    // },
    // ".svgPattern": {
    //   position: "absolute",
    //   height: "100%",
    //   width: "100%",
    //   overflow: "hidden",
    // },
    // ".rect": {
    //   position: "absolute",
    //   height: "999999%",
    // },
    // ".skillsCard": {
    //   padding: 16,
    //   backgroundColor: "white",
    //   height: "90%",
    //   zIndex: "998",
    //   width: "90%",
    //   margin: 15,
    //   marginTop: 30,
    //   marginBottom: 30,
    //   boxShadow:
    //     "4px 10px 8px 0 rgba(0, 0, 0, 0.4), 0 3px 5px 0 rgba(0, 0, 0, 0.4)",
    // },
    // ".skillsFlexContainer": {
    //   backgroundColor: "#f2a31991",
    //   zIndex: "998",
    //   display: "flex",
    //   maxWidth: "100%",
    //   height: "100%",
    //   alignItems: "center",
    //   justifyContent: "center",
    //   overflow: "hidden",
    //   position: "relative",
    // },
    // ".skillsFlex": {
    //   display: "flex",
    //   flexDirection: "row",
    //   flexWrap: "wrap",
    //   alignItems: "center",
    //   justifyContent: "center",
    // },
    // ".skill": {
    //   display: "flex",
    //   marginBottom: 25,
    //   width: "20%",
    //   marginLeft: "5%",
    //   marginRight: "5%",
    //   flexGrow: "2",
    //   minWidth: 246,
    //   maxWidth: 288,
    // },
    ".noWrapWrap": {
      whiteSpace: "nowrap",
    },
    ".githubButton": {
      backgroundColor: "#f2a319",
      display: "inline-block",
      padding: "6px 12px",
      textAlign: "center",
      border: "1px solid transparent",
      borderRadius: 4,
      color: "inherit",
      textDecoration: "none",
    },
    ".githubButton:hover": {
      backgroundColor: "#e28f00",
    },
    ".portfolioFlexContainer": {
      backgroundColor: "#76aed7",
      zIndex: "998",
      display: "flex",
      flexWrap: "wrap",
      maxWidth: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      position: "relative",
      padding: 13,
    },
    // ".projectCard": {
    //   zIndex: "998",
    //   width: 400,
    //   height: "25%",
    //   margin: "1% 1% 5% 1%",
    //   flexGrow: "2",
    //   transition:
    //     "transform .6s ease,filter .6s ease,-webkit-transform .6s ease,-webkit-filter .6s ease",
    //   transitionDelay: "var(--wait,0)",
    //   willChange: "transform",
    //   backgroundColor: "#ffffffd2",
    // },
    // ".bar": {
    //   zIndex: "998",
    //   display: "flex",
    //   alignItems: "center",
    //   padding: 9,
    //   background: "hsl(0, 0%, 19%)",
    // },
    // ".dot": {
    //   marginRight: 4,
    //   width: 8,
    //   height: 8,
    //   background: "hsl(0, 0%, 67%)",
    //   borderRadius: "100%",
    // },
    // ".cardImage": {
    //   background:
    //     "linear-gradient(90deg, rgba(28,5,0,1) 0%, rgba(121,57,9,1) 36%, rgba(0,179,255,1) 100%)",
    //   fallbacks: [
    //     {
    //       background: "rgb(28,5,0)",
    //     },
    //   ],
    //   width: "100%",
    //   overflow: "hidden",
    //   position: "relative",
    // },
    // ".projectImage": {
    //   width: "100%",
    //   height: "auto",
    //   minHeight: 200,
    //   transform: "scaleY(1.05)",
    //   transition: "all 1s ease-in-out",
    //   mozTransition: "all 1s ease-in-out",
    // },
    // ".projectImage:hover": {
    //   transform: "scale(1.1)",
    //   opacity: "0.4",
    // },
    // ".projectText": {
    //   padding: "0px 20px 20px 20px",
    //   color: "#f2a319",
    //   minHeight: 110,
    // },
    ".blogFlexContainer": {
      backgroundColor: "#f2a31991",
      zIndex: "998",
      display: "flex",
      flexDirection: "column",
      maxWidth: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      position: "relative",
      padding: 13,
    },
    "#fm-medium-embed": {
      zIndex: "998",
      boxSizing: "border-box",
      margin: "0 auto",
      textAlign: "center",
    },
    ".fm-post-wrapper": {
      display: "inline-block",
      borderRadius: 3,
      width: 300,
      padding: 15,
      background: "#fff",
      textAlign: "left",
      margin: 10,
      minHeight: 340,
      border: "1px solid #bbb",
      boxShadow: "0 3px 15px rgba(0,0,0,0.25)",
    },
    ".fm-post-title": {
      color: "#76aed7",
      borderBottom: "2px solid",
      borderBottomColor: "#f2a319",
      fontSize: "120%",
    },
    ".fm-post-sub-title": {
      fontSize: 15,
      minHeight: 100,
      lineHeight: 24,
      color: "#76aed7c4",
    },
    ".fm-post-read-more": {
      color: "#76aed7",
      fontSize: "100%",
    },
    ".fm-medium-profile": {
      visibility: "hidden",
    },
    ".medium-profile": {
      zIndex: "998",
      marginTop: 10,
      padding: 15,
      background: "#fff",
      fallbacks: [
        {
          padding: 5,
        },
      ],
      marginBottom: 20,
      borderRadius: 3,
      border: "2px solid #76aed7",
      color: "#76aed7",
      fontSize: "120%",
      minWidth: 220,
      textAlign: "center",
    },
    // ".footer": {
    //   display: "flex",
    //   alignItems: "center",
    //   justifyContent: "center",
    //   flexDirection: "column",
    //   width: "100%",
    //   height: "100%",
    //   background: "url(./../cover.svg)",
    //   backgroundAttachment: "fixed",
    //   backgroundRepeat: "no-repeat",
    //   webkitBackgroundSize: "cover",
    //   mozBackgroundSize: "cover",
    //   oBackgroundSize: "cover",
    //   backgroundSize: "cover",
    //   backgroundPosition: "left top",
    //   fallbacks: [
    //     {
    //       backgroundPosition: "center",
    //     },
    //   ],
    // },
    // ".footerCard": {
    //   backgroundColor: "white",
    //   padding: 5,
    //   zIndex: "998",
    //   minHeight: "20%",
    //   width: "40%",
    //   margin: "5% 1% 5% 1%",
    //   flexGrow: "2",
    //   fallbacks: [
    //     {
    //       padding: 16,
    //     },
    //   ],
    //   paddingBottom: 20,
    //   textAlign: "center",
    //   minWidth: 300,
    // },
    ".contactLink": {
      display: "flex",
      width: 250,
      textDecoration: "none",
      color: "#f79534",
      backgroundColor: "#e2f2ff",
      fallbacks: [
        {
          width: "30%",
        },
      ],
      margin: "auto",
      padding: 15,
    },
    ".loader": {
      zIndex: "999",
      color: "#ffffff",
      fontSize: 90,
      textIndent: "-9999em",
      overflow: "hidden",
      width: "1em",
      height: "1em",
      borderRadius: "50%",
      margin: "72px auto",
      position: "relative",
      webkitTransform: "translateZ(0)",
      msTransform: "translateZ(0)",
      transform: "translateZ(0)",
      webkitAnimation: "load6 1.7s infinite ease, round 1.7s infinite ease",
      animation: "load6 1.7s infinite ease, round 1.7s infinite ease",
    },
    "@keyframes load6": {
      "0%": {
        boxShadow:
          "0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em",
      },
      "5%, 95%": {
        boxShadow:
          "0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em",
      },
      "10%, 59%": {
        boxShadow:
          "0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em",
      },
      "20%": {
        boxShadow:
          "0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em",
      },
      "38%": {
        boxShadow:
          "0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em",
      },
      "100%": {
        boxShadow:
          "0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em",
      },
    },
    "@keyframes round": {
      "0%": {
        webkitTransform: "rotate(0deg)",
        transform: "rotate(0deg)",
      },
      "100%": {
        webkitTransform: "rotate(360deg)",
        transform: "rotate(360deg)",
      },
    },
  },
}
