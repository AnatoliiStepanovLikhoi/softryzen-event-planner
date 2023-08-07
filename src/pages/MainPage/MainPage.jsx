// import { NavLink } from "react-router-dom";
import EventList from "../../components/EventList/EventList";
import { MainSection, MainFilterWrapper, MainTitle } from "./MainPage.styled";
import AddEventButton from "../../components/AddEventButton/AddEventButton";
import CategoryButton from "../../components/CategoryButton/CategoryButton";
import SortButton from "../../components/SortButton/SortButton";
import { useEffect, useState } from "react";
import useEventStore from "../../services/eventStore";

const MainPage = () => {
  const events = useEventStore((state) => state.items);
  const fetchEvents = useEventStore((state) => state.fetchEvents);
  const filterValue = useEventStore((state) => state.filterValue);
  const setFilterValue = useEventStore((state) => state.setFilterValue);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleFilterCategory = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
    setFilterValue("");
  };

  const filteredEvents = events.filter((event) => {
    if (selectedCategory) {
      return event.category
        .toLowerCase()
        .includes(selectedCategory.toLowerCase());
    }
    if (filterValue) {
      return event.title.toLowerCase().includes(filterValue.toLowerCase());
    }
    return true;
  });

  return (
    <MainSection>
      <MainFilterWrapper>
        <CategoryButton handleFilterCategory={handleFilterCategory} />
        <SortButton />
        <AddEventButton />
      </MainFilterWrapper>
      <MainTitle>My events</MainTitle>
      <EventList events={filteredEvents} />
    </MainSection>
  );
};

export default MainPage;
