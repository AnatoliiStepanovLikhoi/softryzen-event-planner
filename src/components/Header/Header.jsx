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
        <Logo>Event Planner</Logo>

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
