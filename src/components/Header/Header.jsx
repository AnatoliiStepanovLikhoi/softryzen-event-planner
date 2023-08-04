import {
  HeaderBackground,
  HeaderContainer,
  Logo,
  Input,
  InputContainer,
  SearchIcon,
  // HeaderTopWrapper,
  LanguageSelectContainer,
} from "./Header.styled";
import LanguageSelect from "../LanguageSelect/LanguageSelect";

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
          <Input placeholder="Search by keywords" />
          <SearchIcon />
        </InputContainer>
      </HeaderContainer>
    </HeaderBackground>
  );
};

export default Header;
