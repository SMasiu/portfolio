import styled, { keyframes } from 'styled-components'

export const ScrollWrapper = styled.span`
  display: block;
  width: 25px;
  height: 40px;
  border-radius: 50px;
  border: 2px solid #444;
  position: relative;
`

export const scrollAnimation = keyframes`
    0% { transform: translate(-50%, 0); opacity: 0.1; }
    40% { transform: translate(-50%, 0); opacity: 1; }
    100% { transform: translate(-50%, 10px); opacity: 0; }
`

export const ScrollDot = styled.span`
  position: absolute;
  top: 5px;
  left: 50%;
  display: block;
  width: 4px;
  height: 6px;
  background-color: #444;
  border-radius: 4px;
  transform: translate(-50%, 0);
  animation-name: ${scrollAnimation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`
