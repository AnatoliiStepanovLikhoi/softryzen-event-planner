/* eslint-disable react/prop-types */
import {
  Card,
  CardDetails,
  CardImage,
  CardTitle,
  CardDescription,
  CardWrapper,
  CateroryWrapper,
  LocationWrapper,
  Category,
  Priority,
  CardInfoWrapper,
  MoreInfoButton,
} from "./EventCard.styled";

import { formatDateTime } from "../../services/formatDate";

export const EventCard = ({ event }) => {
  const {
    picture,
    title,
    description,
    category,
    priority,
    location,
    selectDate,
    selectTime,
  } = event;

  const formatedDateTime = formatDateTime(selectDate, selectTime);

  return (
    <Card>
      <CardDetails>
        <CardImage src={picture} alt={title} />
        <CateroryWrapper>
          <Category>{category}</Category>
          <Priority>{priority}</Priority>
        </CateroryWrapper>

        <CardWrapper>
          <LocationWrapper>
            <p>{formatedDateTime}</p>
            <p>{location}</p>
          </LocationWrapper>

          <CardInfoWrapper>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <MoreInfoButton className="moreInfo">More info</MoreInfoButton>
          </CardInfoWrapper>
        </CardWrapper>
      </CardDetails>
    </Card>
  );
};
