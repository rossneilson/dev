import React from "react"
import styled from "styled-components"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import StepContent from "@material-ui/core/StepContent"
import Button from "@material-ui/core/Button"

import VideoCall from "@material-ui/icons/VideoCall"
import Create from "@material-ui/icons/Create"
import CodeIcon from "@material-ui/icons/Code"
import FeedbackIcon from "@material-ui/icons/Feedback"
import PublicIcon from "@material-ui/icons/Public"
import BuildIcon from "@material-ui/icons/Build"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"

import SvgPattern from "../svg/SvgPattern"

const ServicesFlexContainer = styled.section`
  background-color: #f2a31991;
  z-index: 998;
  display: flex;
  max-width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`

const Card = styled.section`
  padding: 2% 8% 2% 8%;
  background-color: white;
  height: 90%;
  z-index: 998;
  width: 90%;
  margin: 15px;
  margin-top: 30px;
  margin-bottom: 30px;
  box-shadow: 4px 10px 8px 0 rgba(0, 0, 0, 0.4), 0 3px 5px 0 rgba(0, 0, 0, 0.4);
`

const StyledIcon = styled.section`
  background-color: #fbbe1b;
  z-index: 1;
  color: #fff;
  width: 50;
  height: 50;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  padding: 15px;
`

function getStepContent(step) {
  switch (step) {
    case 0:
      return <FormattedMessage id="services.1.desc" />
    case 1:
      return <FormattedMessage id="services.2.desc" />
    case 2:
      return <FormattedMessage id="services.3.desc" />
    case 3:
      return <FormattedMessage id="services.4.desc" />
    case 4:
      return <FormattedMessage id="services.5.desc" />
    case 5:
      return <FormattedMessage id="services.6.desc" />
    default:
      return "Unknown step"
  }
}

export default function About(props) {
  const intl = useIntl()
  const [activeStep, setActiveStep] = React.useState(0)

  const steps = [
    intl.formatMessage({ id: "services.1.title" }),
    intl.formatMessage({ id: "services.2.title" }),
    intl.formatMessage({ id: "services.3.title" }),
    intl.formatMessage({ id: "services.4.title" }),
    intl.formatMessage({ id: "services.5.title" }),
    intl.formatMessage({ id: "services.6.title" }),
  ]

  const icons = {
    1: <VideoCall onClick={() => setActiveStep(0)} fontSize="large" />,
    2: <Create onClick={() => setActiveStep(1)} fontSize="large" />,
    3: <CodeIcon onClick={() => setActiveStep(2)} fontSize="large" />,
    4: <FeedbackIcon onClick={() => setActiveStep(3)} fontSize="large" />,
    5: <PublicIcon onClick={() => setActiveStep(4)} fontSize="large" />,
    6: <BuildIcon onClick={() => setActiveStep(5)} fontSize="large" />,
  }

  return (
    <ServicesFlexContainer>
      <SvgPattern type="circle" />
      <Card>
        <h3>
          <FormattedMessage id="services.title" />
        </h3>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                StepIconComponent={props => {
                  return <StyledIcon>{icons[String(props.icon)]}</StyledIcon>
                }}
              >
                {label}
              </StepLabel>
              <StepContent>
                {getStepContent(index)}
                <div>
                  <div>
                    <Button
                      aria-label="Previous step button"
                      disabled={activeStep === 0}
                      style={{
                        color:
                          activeStep === 0 ? "#cec8c8" : "rgb(32, 150, 243)",
                      }}
                      onClick={() => {
                        setActiveStep(prevActiveStep => prevActiveStep - 1)
                      }}
                    >
                      <KeyboardArrowUpIcon fontSize="large" />
                    </Button>
                    <Button
                      aria-label="Next step button"
                      disabled={activeStep === steps.length - 1}
                      style={{
                        color:
                          activeStep === steps.length - 1
                            ? "#cec8c8"
                            : "rgb(32, 150, 243)",
                      }}
                      onClick={() => {
                        setActiveStep(prevActiveStep => prevActiveStep + 1)
                      }}
                    >
                      <KeyboardArrowDownIcon fontSize="large" />
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Card>
    </ServicesFlexContainer>
  )
}
