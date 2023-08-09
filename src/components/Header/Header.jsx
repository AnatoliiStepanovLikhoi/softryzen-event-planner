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

const Header = () => {
  return (
    <HeaderBackground>
      <HeaderContainer>
        <h1 style={{ display: "none" }}>Event Planner</h1>
        <Logo to={"/"} aria-label="main page link">
          Event Planner
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
