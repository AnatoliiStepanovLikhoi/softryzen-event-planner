/* eslint-disable react/prop-types */
import useEventStore from "../../services/eventStore";
import { EventListWrapper } from "./EventList.styled";
import { EventCard } from "../EventCard/EventCard";
import Loader from "../Loader/Loader";

const EventList = ({ events }) => {
  // const events = useEventStore((state) => state.items);
  const isLoading = useEventStore((state) => state.isLoading);
  const error = useEventStore((state) => state.error);
  // const fetchEvents = useEventStore((state) => state.fetchEvents);
  // const filterValue = useEventStore((state) => state.filterValue);

  console.log(events);

  // useEffect(() => {
  //   fetchEvents();
  // }, [fetchEvents]);

  // const filteredEvents = events.filter((event) =>
  //   event.title.toLowerCase().includes(filterValue.toLowerCase())
  // );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // console.log(events);

  return (
    <EventListWrapper>
      {events.length === 0 ? (
        <div>No events found.</div>
      ) : (
        events.map((event) => <EventCard key={event.id} event={event} />)
      )}
    </EventListWrapper>
  );
};

export default EventList;
