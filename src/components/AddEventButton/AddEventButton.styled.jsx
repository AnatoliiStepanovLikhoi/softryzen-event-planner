import styled from "styled-components";
import { device } from "../../constants/deviceType/deviceType";
import { NavLink } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";

export const AddEventBtn = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  padding: 16px;
  margin-left: 24px;
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

export const AddEventIcon = styled(BsPlusLg)`
  width: 24px;
  height: 24px;
`;

export const AddEventTitle = styled.span`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;
