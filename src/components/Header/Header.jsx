import {
  HeaderBackground,
  HeaderContainer,
  Logo,
  // Input,
  InputContainer,
  SearchIcon,
  // HeaderTopWrapper,
  LanguageSelectContainer,
} from "./Header.styled";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import SearchInput from "../SearchInput/SearchInput";

const Header = () => {
  return (
    <HeaderBackground>
      <HeaderContainer>
        {/* <HeaderTopWrapper> */}
        <Logo>Event Planner</Logo>
        <LanguageSelectContainer>
          <LanguageSelect />
        </LanguageSelectContainer>

        {/* </HeaderTopWrapper> */}
        <InputContainer>
          <SearchInput placeholder="Search by keywords" />
          <SearchIcon />
        </InputContainer>
      </HeaderContainer>
    </HeaderBackground>
  );
};

export default Header;
