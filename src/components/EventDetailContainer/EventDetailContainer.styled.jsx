import styled from "styled-components";
import { device } from "../../constants/deviceType/deviceType";

export const EventWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.card.bg};
  overflow: hidden;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.colors.card.cardShadow};
`;

export const EventImage = styled.img`
  width: 100%;
  height: 168px;
  object-fit: cover;
  border-radius: 8px;

  @media ${device.tablet} {
    height: 268px;
  }
`;

export const EventBottomWrapper = styled.div`
  padding: 24px 16px 40px;

  @media ${device.tablet} {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media ${device.desktop} {
    padding: 20px 40px 40px 10px;
  }
`;

export const EventDescription = styled.p`
  color: ${(props) => props.theme.colors.card.textDesc};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 24px;
  text-align: left;

  @media ${device.desktop} {
    margin-bottom: 34px;
  }
`;

export const EventInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 40px;

  @media ${device.desktop} {
    margin-bottom: 24px;
  }
`;

export const EventInfoTab = styled.div`
  font-weight: 500;
  line-height: 1.42;
  padding: 6px 12px;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.colors.card.cardShadow};
  background-color: ${(props) => props.theme.colors.card.bg};
  color: ${(props) => props.theme.colors.card.textCategory};
`;

export const EventPriorityTab = styled.div`
  font-weight: 500;
  line-height: 1.42;
  padding: 6px 12px;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.colors.card.cardShadow};
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

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 24px;
  justify-content: flex-end;
  position: relative;
`;

export const EditButton = styled.button`
  padding: 8px 14px;
  border: 1px solid ${(props) => props.theme.colors.button.default};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.button.title};
  color: ${(props) => props.theme.colors.button.default};

  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    color: ${(props) => props.theme.colors.button.hover};
    border-color: ${(props) => props.theme.colors.button.hover};
  }

  @media ${device.tablet} {
    width: auto;
  }
`;

export const DeleteButton = styled.button`
  padding: 8px 14px;
  border: 1px solid ${(props) => props.theme.colors.button.default};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.button.default};
  color: ${(props) => props.theme.colors.button.title};

  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    background-color: ${(props) => props.theme.colors.button.hover};
  }
`;
