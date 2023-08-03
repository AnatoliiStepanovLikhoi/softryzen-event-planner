import {
  HeaderBackground,
  HeaderContainer,
  Logo,
  Input,
  InputContainer,
  SearchIcon,
  HeaderTopWrapper,
} from "./Header.styled";
import LanguageSelect from "../LanguageSelect/LanguageSelect";

const Header = () => {
  return (
    <HeaderBackground>
      <HeaderContainer>
        <HeaderTopWrapper>
          <Logo>Event Planner</Logo>
          <LanguageSelect />
        </HeaderTopWrapper>
        <InputContainer>
          <Input placeholder="Search by keywords" />
          <SearchIcon />
        </InputContainer>
      </HeaderContainer>
      {/* <BottomLine /> */}
    </HeaderBackground>
  );
};

export default Header;
