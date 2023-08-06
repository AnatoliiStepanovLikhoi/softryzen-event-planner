import styled from "styled-components";
// import { device } from "../../constants/deviceType/deviceType";
import { BiArrowBack } from "react-icons/bi";

export const GoBackButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.accent};
  font-size: 14px;
  font-family: inherit;
`;

export const StyledArrow = styled(BiArrowBack)`
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.colors.accent};
`;
