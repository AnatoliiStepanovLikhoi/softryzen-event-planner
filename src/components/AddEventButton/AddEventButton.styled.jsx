import styled from "styled-components";
import { device } from "../../constants/deviceType/deviceType";
import { NavLink } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

export const AddEventBtn = styled(NavLink)`
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  color: ${(props) => props.theme.colors.button.title};
  background-color: ${(props) => props.theme.colors.button.default};
  box-shadow: ${(props) => props.theme.colors.button.buttonShadow};

  &:hover {
    background-color: ${(props) => props.theme.colors.button.hover};
  }

  @media ${device.tablet} {
    width: 193px;
    padding: 16px 12px;
  }
`;

export const AddEventIcon = styled(FiPlus)`
  width: 24px;
  height: 24px;
`;

export const AddEventTitle = styled.span`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;
