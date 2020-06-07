import { keyframes } from "styled-components"

export const slideInFromBottom = keyframes`
  0% {
    transform: translateY(300%);
  }
  80% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  }
`
export const slideInFromBottomModal = keyframes`
  0% {
    transform: translate(-50%, -300%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
`

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
