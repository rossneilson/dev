import React from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"
import { GatsbyImage as Img, getImage } from "gatsby-plugin-image"

const Explanation = styled.section`
  width: 100%;
  min-width: 300px;
`

const BulletPointContainer = styled.section`
  display: flex;
  flex-flow: wrap;
  gap: 12px;
  justify-content: space-evenly;
`

const BulletPoint = styled.section`
  min-width: 300px;
  width: 30%;
`

const Icon = styled(Img)`
  height: 100%;
  min-width: 60px;
`

const Title = styled.section`
  display: flex;
`
const Heading = styled.h4`
  font-size: ${props => props.theme.fontSizes.r};
  margin: auto;
  margin-left: 0;
`

const Description = styled.p`
  font-size: ${props => props.theme.fontSizes.s};
  margin: 0px 0px 0px 50px;
`

export default function KeyPoints({
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
}) {
  const icon1Image = getImage(icon1)
  const icon2Image = getImage(icon2)
  const icon3Image = getImage(icon3)
  const icon4Image = getImage(icon4)
  const icon5Image = getImage(icon5)
  const icon6Image = getImage(icon6)
  return (
    <Explanation>
      <BulletPointContainer>
        <BulletPoint data-sal="slide-up">
          <Title>
            <Icon image={icon1Image} />
            <Heading>
              <FormattedMessage id="services.1.title" />
            </Heading>
          </Title>
          <Description>
            <FormattedMessage id="services.1.desc" />
          </Description>
        </BulletPoint>
        <BulletPoint data-sal="slide-up" data-sal-delay="500">
          <Title>
            <Icon image={icon2Image} />
            <Heading>
              <FormattedMessage id="services.2.title" />
            </Heading>
          </Title>
          <Description>
            <FormattedMessage id="services.2.desc" />
          </Description>
        </BulletPoint>
        <BulletPoint data-sal="slide-up" data-sal-delay="600">
          <Title>
            <Icon image={icon3Image} />
            <Heading>
              <FormattedMessage id="services.3.title" />
            </Heading>
          </Title>
          <Description>
            <FormattedMessage id="services.3.desc" />
          </Description>
        </BulletPoint>
        <BulletPoint data-sal="slide-up" data-sal-delay="700">
          <Title>
            <Icon image={icon4Image} />
            <Heading>
              <FormattedMessage id="services.4.title" />
            </Heading>
          </Title>
          <Description>
            <FormattedMessage id="services.4.desc" />
          </Description>
        </BulletPoint>
        <BulletPoint data-sal="slide-up" data-sal-delay="900">
          <Title>
            <Icon image={icon5Image} />
            <Heading>
              <FormattedMessage id="services.5.title" />
            </Heading>
          </Title>
          <Description>
            <FormattedMessage id="services.5.desc" />
          </Description>
        </BulletPoint>
        <BulletPoint data-sal="slide-up" data-sal-delay="1000">
          <Title>
            <Icon image={icon6Image} />
            <Heading>
              <FormattedMessage id="services.6.title" />
            </Heading>
          </Title>
          <Description>
            <FormattedMessage id="services.6.desc" />
          </Description>
        </BulletPoint>
      </BulletPointContainer>
    </Explanation>
  )
}
