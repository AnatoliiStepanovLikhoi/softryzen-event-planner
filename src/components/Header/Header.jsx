import {
  HeaderBackground,
  HeaderContainer,
  Logo,
  InputContainer,
  SearchIcon,
  LanguageSelectContainer,
} from "./Header.styled";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import SearchInput from "../SearchInput/SearchInput";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <HeaderBackground>
      <HeaderContainer>
        <Logo>
          <NavLink
            to={"/"}
            style={{ color: "#7B61FF" }}
            aria-label="main page link"
          >
            Event Planner
          </NavLink>
        </Logo>

        <LanguageSelectContainer>
          <LanguageSelect />
        </LanguageSelectContainer>

        <InputContainer>
          <SearchInput placeholder="Search by keywords" />
          <SearchIcon />
        </InputContainer>
      </HeaderContainer>
    </HeaderBackground>
  );
};

export default Header;
