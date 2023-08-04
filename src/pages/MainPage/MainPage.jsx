import { NavLink } from "react-router-dom";
import EventList from "../../components/EventList/EventList";
import { MainSection, MainFilterWrapper, MainTitle } from "./MainPage.styled";

const MainPage = () => {
  return (
    <MainSection>
      <MainFilterWrapper>
        <NavLink to="/create">Create</NavLink>
      </MainFilterWrapper>
      <MainTitle>My events</MainTitle>
      <EventList />
    </MainSection>
  );
};

export default MainPage;
