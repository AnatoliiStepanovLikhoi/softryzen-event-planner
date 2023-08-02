import useEventStore from "../../services/eventStore";
import { useEffect } from "react";

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
    <div>
      {events.map((event) => (
        <div key={event.id}>{event.title}</div>
      ))}
    </div>
  );
};

export default EventList;
