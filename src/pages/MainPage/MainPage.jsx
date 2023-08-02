import { NavLink } from "react-router-dom";
import EventList from "../../components/EventList/EventList";

const MainPage = () => {
  return (
    <div>
      <h2>My events</h2>
      <NavLink to="/create">Create</NavLink>
      <EventList />
    </div>
  );
};

export default MainPage;
