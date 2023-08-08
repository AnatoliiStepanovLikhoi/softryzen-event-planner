import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";

export const GoBackButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  line-height: 1.5;
  border: none;
  color: ${(props) => props.theme.colors.accent};
`;

export const StyledArrow = styled(BiArrowBack)`
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.colors.accent};
`;
