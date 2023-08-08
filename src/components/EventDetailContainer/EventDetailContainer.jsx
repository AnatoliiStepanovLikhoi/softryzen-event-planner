/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { formatDateTime } from "../../services/formatDate";
import useEventStore from "../../services/eventStore";
import {
  EventWrapper,
  EventImage,
  EventBottomWrapper,
  EventDescription,
  EventInfoWrapper,
  EventInfoTab,
  EventPriorityTab,
  ButtonWrapper,
  EditButton,
  DeleteButton,
} from "./EventDetailContainer.styled";

import defaultImageDesk from "../../assets/defaultDesktop.png";

const EventDetailContainer = ({ eventDetails }) => {
  const deleteEventById = useEventStore((state) => state.deleteEventByID);
  const {
    id,
    picture,
    title,
    description,
    category,
    priority,
    location,
    selectDate,
    selectTime,
  } = eventDetails;

  const navigate = useNavigate();
  const formatedDateTime = formatDateTime(selectDate, selectTime);

  const handleDeleteClick = () => {
    deleteEventById(id);
    navigate("/");
  };

  console.log(picture);

  return (
    <EventWrapper>
      <EventImage
        src={picture || defaultImageDesk}
        alt={title ?? "event default image"}
      />
      <EventBottomWrapper>
        <EventDescription>{description}</EventDescription>
        <EventInfoWrapper>
          <EventInfoTab>{category}</EventInfoTab>
          <EventPriorityTab $priority={`${priority}`}>
            {priority}
          </EventPriorityTab>
          <EventInfoTab>{location}</EventInfoTab>
          <EventInfoTab>{formatedDateTime}</EventInfoTab>
        </EventInfoWrapper>
        <ButtonWrapper>
          <EditButton>Edit</EditButton>
          <DeleteButton type="button" onClick={handleDeleteClick}>
            Delete event
          </DeleteButton>
        </ButtonWrapper>
      </EventBottomWrapper>
    </EventWrapper>
  );
};

export default EventDetailContainer;
