// import { NavLink } from "react-router-dom";
import EventList from "../../components/EventList/EventList";
import { MainSection, MainFilterWrapper, MainTitle } from "./MainPage.styled";
import AddEventButton from "../../components/AddEventButton/AddEventButton";

const MainPage = () => {
  return (
    <MainSection>
      <MainFilterWrapper>
        <AddEventButton />
      </MainFilterWrapper>
      <MainTitle>My events</MainTitle>
      <EventList />
    </MainSection>
  );
};

export default MainPage;
