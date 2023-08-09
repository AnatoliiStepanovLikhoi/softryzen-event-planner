import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "../../constants/deviceType/deviceType";
import { FiSearch } from "react-icons/fi";

export const HeaderBackground = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};

  border-bottom: 1px solid ${(props) => props.theme.colors.accent};
`;

export const HeaderContainer = styled.div`
  padding: 32px 24px 24px;
  width: 320px;
  margin: 0 auto;

  display: grid;
  gap: 24px;
  grid-template-areas:
    "a a b"
    "c c c";

  @media ${device.tablet} {
    gap: 24px;
    grid-template-areas: "a c b";
    grid-template-columns: 1fr 368px 69px;

    width: 768px;
    padding: 26px 40px;
  }

  @media ${device.desktop} {
    grid-template-columns: 1fr 410px 69px;

    width: 1280px;
    padding: 22px 4px;
  }
`;

export const LanguageSelectContainer = styled.div`
  grid-area: b;
  justify-self: end;
  outline: none;
`;

export const Logo = styled(NavLink)`
  font-family: Alata;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.38;
  grid-area: a;
  align-self: center;

  color: ${(props) => props.theme.colors.accent};
`;

export const InputContainer = styled.div`
  position: relative;
  grid-area: c;

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
`;

export const SearchIcon = styled(FiSearch)`
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.colors.accent};

  position: absolute;
  top: 12px;
  left: 12px;

  @media ${device.tablet} {
    left: 12px;
  }

  @media ${device.desktop} {
    top: 12px;
  }
`;
