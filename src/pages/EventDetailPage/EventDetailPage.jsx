import { MainSection } from "../MainPage/MainPage.styled";
import { BackButton } from "../../components/BackButton/BackButton";
import { EventDetailWrapper, EventDetailTitle } from "./EventDetailPage.styled";
import { useParams } from "react-router-dom";
import useEventStore from "../../services/eventStore";
import { useEffect } from "react";

const EventDetailPage = () => {
  const fetchEventById = useEventStore((state) => state.fetchEventById);
  const eventDetails = useEventStore((state) => state.eventDetails);

  const { eventId } = useParams();

  useEffect(() => {
    fetchEventById(eventId);
  }, [eventId, fetchEventById]);

  // console.log(eventDetails);

  const {
    id,
    title,
    date,
    time,
    location,
    description,
    category,
    priority,
    picture,
  } = eventDetails;

  return (
    <MainSection>
      <BackButton />
      <EventDetailWrapper>
        <EventDetailTitle>{title}</EventDetailTitle>
        {/* <EventContainer /> */}
      </EventDetailWrapper>
    </MainSection>
  );
};

export default EventDetailPage;
