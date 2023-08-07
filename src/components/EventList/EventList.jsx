import useEventStore from "../../services/eventStore";
import { useEffect } from "react";
import { EventListWrapper } from "./EventList.styled";
import { EventCard } from "../EventCard/EventCard";

const EventList = () => {
  const events = useEventStore((state) => state.items);
  const isLoading = useEventStore((state) => state.isLoading);
  const error = useEventStore((state) => state.error);
  const fetchEvents = useEventStore((state) => state.fetchEvents);
  const filterValue = useEventStore((state) => state.filterValue);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(filterValue.toLowerCase())
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(events);

  return (
    <EventListWrapper>
      {filteredEvents.length === 0 ? (
        <div>No events found.</div>
      ) : (
        filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))
      )}
    </EventListWrapper>
  );
};

export default EventList;
