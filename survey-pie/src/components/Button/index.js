import styled from 'styled-components';

import { PRIMARY, SECONDARY, TERTIARY } from '../../constants/color';

const colorMap = {
  PRIMARY, // === PRIMAR: PRIMAR
  SECONDARY,
  TERTIARY,
};

const Button = styled.button`
  padding: 16px 24px;
  min-width: 200px;
  color: ${(props) => {
    return colorMap[props.type].BUTTON.DEFAULT.COLOR;
  }};
  background: ${({ type }) => colorMap[type].BUTTON.DEFAULT.BACKGROUND};
  border-radius: 4px;
  font-weight: bold;
  font-size: 18px;

  border: ${({ type }) =>
    type === 'TERTIARY'
      ? `1px solid ${TERTIARY.BUTTON.DEFAULT.BORDER}`
      : 'none'};

  &:hover {
    color: ${(props) => {
      return colorMap[props.type].BUTTON.HOVER.COLOR;
    }};
    background: ${({ type }) => colorMap[type].BUTTON.HOVER.BACKGROUND};
  }

  &:active {
    color: ${(props) => {
      return colorMap[props.type].BUTTON.PRESSED.COLOR;
    }};
    background: ${({ type }) => colorMap[type].BUTTON.PRESSED.BACKGROUND};
  }

  &:disabled {
    color: ${(props) => {
      return colorMap[props.type].BUTTON.DISABLED.COLOR;
    }};
    background: ${({ type }) => colorMap[type].BUTTON.DISABLED.BACKGROUND};
  }
`;

export default Button;
