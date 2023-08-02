import styled from "styled-components";
import Container from "../../constants/Container/Container.styled";
import { device } from "../../constants/deviceType/deviceType";
import { FiSearch } from "react-icons/fi";

export const HeaderBackground = styled.header`
  background-color: ${(props) => props.theme.colors.background};
  padding-top: 32px;
`;

export const HeaderContainer = styled(Container)`
  @media ${device.tablet} {
    display: flex;
    align-items: center;

    width: 680px;
  }

  @media ${device.desktop} {
    display: flex;
    align-items: center;
  }
`;
export const Logo = styled.div`
  font-family: Alata;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.38;

  color: ${(props) => props.theme.colors.accent};

  @media ${device.tablet} {
    margin-right: 80px;
  }

  @media ${device.desktop} {
    margin-right: 623px;
    white-space: nowrap;
  }
`;

export const InputContainer = styled.div`
  margin-top: 31px;
  position: relative;

  @media ${device.tablet} {
    margin-top: 0;
    width: 368px;
  }

  @media ${device.desktop} {
    width: 410px;
    margin-top: 0;
  }
`;

export const Input = styled.input`
  /* position: relative; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* height: 48px; */
  padding: 12px 0 12px 48px;
  width: 272px;
  margin: 0;

  border-radius: ${(props) => props.theme.radii.normal};
  background: ${(props) => props.theme.colors.input.bg};
  box-shadow: ${(props) => props.theme.colors.input.inputShadow};

  color: ${(props) => props.theme.colors.input.placeholderColor};
  font-size: 14px;
  font-weight: 300;
  line-height: 1;

  /* border: 1px solid ${(props) => props.theme.colors.input.bg}; */
  border: none;
  z-index: 0;

  @media ${device.tablet} {
    width: 368px;
    justify-content: center;
    align-items: center;
  }

  @media ${device.desktop} {
    max-width: 410px;
    justify-content: center;
    align-items: center;
  }
`;

export const SearchIcon = styled(FiSearch)`
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.colors.accent};

  position: absolute;
  top: 8px;
  left: 12px;

  z-index: 1;

  @media ${device.tablet} {
    top: 8px;
    left: 12px;
  }

  @media ${device.desktop} {
    top: 40px;
    left: 871px;
  }
`;

export const BottomLine = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.accent};
  margin-top: 24px;

  @media ${device.tablet} {
    margin-top: 18px;
  }

  @media ${device.desktop} {
    margin-top: 22px;
  }
`;
