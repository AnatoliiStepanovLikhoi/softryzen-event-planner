import {
  HeaderBackground,
  HeaderContainer,
  Logo,
  Input,
  InputContainer,
  SearchIcon,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderBackground>
      <HeaderContainer>
        <Logo>Event Planner</Logo>
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
