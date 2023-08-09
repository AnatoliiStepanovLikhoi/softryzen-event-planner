import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { device } from "../../constants/deviceType/deviceType";

export const StyledInput = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;

  padding: 12px 12px 12px 48px;
  width: 272px;
  height: 48px;
  margin: 0;

  border-radius: ${(props) => props.theme.radii.inputNormal};
  background: ${(props) => props.theme.colors.input.bg};
  box-shadow: ${(props) => props.theme.colors.input.inputShadow};

  color: ${(props) => props.theme.colors.input.placeholderColor};
  font-size: 14px;
  font-weight: 300;
  line-height: 1;

  border: none;
  z-index: 0;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  @media ${device.tablet} {
    width: 368px;
    justify-content: center;
    align-items: center;
  }

  @media ${device.desktop} {
    width: 410px;
    justify-content: center;
    align-items: center;
  }

  &:focus {
    color: ${(props) => props.theme.colors.accent};
    font-weight: 400;
  }
`;

export const ClearIcon = styled(IoClose)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: ${(props) => props.theme.colors.accent};
  cursor: pointer;

  width: 24px;
  height: 24px;
`;
