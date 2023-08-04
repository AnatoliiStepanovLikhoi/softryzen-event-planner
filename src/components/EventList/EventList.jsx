import useEventStore from "../../services/eventStore";
import { useEffect } from "react";
import { EventListWrapper } from "./EventList.styled";

const EventList = () => {
  const events = useEventStore((state) => state.items);
  const isLoading = useEventStore((state) => state.isLoading);
  const error = useEventStore((state) => state.error);
  const fetchEvents = useEventStore((state) => state.fetchEvents);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <EventListWrapper>
      {events.map((event) => (
        <li key={event.id}>{event.title}</li>
      ))}
    </EventListWrapper>
  );
};

export default EventList;
