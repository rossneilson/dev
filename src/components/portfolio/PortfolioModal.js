import React from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"
import Img from "gatsby-image"
import Button from "@material-ui/core/Button"

const Modal = styled.section`
  z-index: 99999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${props => (props.show ? "block" : "none")};
`

const ModalMain = styled.section`
  position: fixed;
  background: white;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Bar = styled.section`
  z-index: 998;
  display: flex;
  align-items: center;
  padding: 9px;
  background: hsl(0, 0%, 19%);
`

const Dot = styled.section`
  margin-right: 4px;
  width: 12px;
  height: 12px;
  background: hsl(0, 0%, 67%);
  border-radius: 100%;
  cursor: pointer;
`

const Card = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Image = styled(Img)`
  min-width: 340px;
  width: 50%;
  flex-grpw: 1;
`

const Description = styled.section`
  padding: 2%;
  min-width: 340px;
  width: 50%;
  flex-grow: 1;
  background-color: #444444;
  color: white;
`
const ButtonLink = styled(Button)`
  background-color: rgb(32, 150, 243);
  color: white;
  &:hover {
    background-color: rgb(250, 182, 0);
  }
`

function linesToParagraphs(...nodes) {
  return nodes
    .map(node =>
      typeof node === "string"
        ? node.split("\n").map(text => <p>{text}</p>)
        : node
    )
    .reduce((nodes, node) => nodes.concat(node), [])
}

export default function PortfolioModal({ handleClose, show, selectedExample }) {
  return (
    <Modal
      show={show}
      onClick={event => {
        if (event.target === event.currentTarget) {
          handleClose(false)
        }
      }}
    >
      <ModalMain>
        <Bar onClick={() => handleClose(false)}>
          <Dot />
          <Dot />
          <Dot />
        </Bar>
        <Card>
          {selectedExample.cover ? (
            <Image fluid={selectedExample.cover} />
          ) : null}
          <Description>
            <h4 style={{ color: "white" }}>
              <FormattedMessage
                id={"portfolio." + selectedExample.index + ".title"}
              />
            </h4>
            <FormattedMessage
              id={"portfolio." + selectedExample.index + ".detailed"}
            >
              {linesToParagraphs}
            </FormattedMessage>
            <ButtonLink
              variant="contained"
              href="https://www.google.com"
              target="_blank"
            >
              Go to site
            </ButtonLink>
          </Description>
        </Card>
      </ModalMain>
    </Modal>
  )
}