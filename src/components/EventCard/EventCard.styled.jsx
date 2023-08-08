import styled from "styled-components";
import { device } from "../../constants/deviceType/deviceType";
import { NavLink } from "react-router-dom";

export const Card = styled.li`
  width: 272px;
  height: 480px;
  position: relative;

  border-radius: 12px;
  box-shadow: ${(props) => props.theme.colors.card.cardShadow};
  background: ${(props) => props.theme.colors.card.bg};

  @media ${device.tablet} {
    width: 332px;
    height: 480px;
  }
  @media ${device.desktop} {
    width: 302px;
    height: 480px;
  }
`;

export const CardWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
`;

export const CardImage = styled.img`
  width: 272px;
  height: 340px;
  border-radius: 12px 12px 0 0;

  @media ${device.tablet} {
    width: 332px;
  }
  @media ${device.desktop} {
    width: 302px;
  }
`;

export const CateroryWrapper = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  gap: 12px;
`;

export const Category = styled.p`
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.card.bg};
  color: ${(props) => props.theme.colors.card.textCategory};
`;

export const Priority = styled.p`
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.card.bg};

  color: ${(props) => {
    if (props.$priority === "High") {
      return props.theme.colors.high;
    } else if (props.$priority === "Medium") {
      return props.theme.colors.medium;
    } else {
      return props.theme.colors.low;
    }
  }};
`;

export const LocationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 272px;
  padding: 8px 16px;
  background-color: ${(props) => props.theme.colors.card.bgSecondary};
  color: ${(props) => props.theme.colors.card.textDate};

  @media ${device.tablet} {
    width: 332px;
  }
  @media ${device.desktop} {
    width: 302px;
  }
`;

export const CardInfoWrapper = styled.div`
  width: 272px;
  min-height: 144px;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.card.bg};
  border-radius: 0 0 12px 12px;
  @media ${device.tablet} {
    width: 332px;
  }
  @media ${device.desktop} {
    width: 302px;
  }
`;

export const CardTitle = styled.h3`
  color: ${(props) => props.theme.colors.card.textTitle};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const CardDescription = styled.p`
  color: ${(props) => props.theme.colors.card.textDesc};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-top: 16px;

  max-height: 4.2em;
  overflow: hidden;
`;

export const MoreInfoButton = styled(NavLink)`
  display: none;
  margin-top: 16px;
  margin-left: auto;
  width: 114px;
  padding: 10px 24px;
  outline: none;
  border: none;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  background-color: ${(props) => props.theme.colors.button.default};
  color: ${(props) => props.theme.colors.button.title};
  border-radius: 8px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.button.hover};
  }
`;

export const CardDetails = styled.div`
  &:hover .moreInfo,
  &:focus .moreInfo {
    display: block;
    animation: fadeIn 0.6s;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
