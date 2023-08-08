import { MainSection } from "../MainPage/MainPage.styled";
import { BackButton } from "../../components/BackButton/BackButton";
import { EventDetailWrapper, EventDetailTitle } from "./EventDetailPage.styled";
import EventDetailContainer from "../../components/EventDetailContainer/EventDetailContainer";
import Loader from "../../components/Loader/Loader";
import useEventStore from "../../services/eventStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const fetchEventById = useEventStore((state) => state.fetchEventById);
  const eventDetails = useEventStore((state) => state.eventDetails);
  const isLoading = useEventStore((state) => state.isLoading);
  const error = useEventStore((state) => state.error);

  const { eventId } = useParams();

  useEffect(() => {
    fetchEventById(eventId);
  }, [eventId, fetchEventById]);

  const { title } = eventDetails;

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Unfortunately, something went wrong: {error}</div>;
  }

  return (
    <MainSection>
      <BackButton />
      <EventDetailWrapper>
        <EventDetailTitle>{title}</EventDetailTitle>
        <EventDetailContainer eventDetails={eventDetails} />
      </EventDetailWrapper>
    </MainSection>
  );
};

export default EventDetailPage;
