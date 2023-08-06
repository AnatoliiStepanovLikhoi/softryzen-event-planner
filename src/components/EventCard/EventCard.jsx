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
import defaultImage from "../../assets/default.png";

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
        <CardImage
          src={Object.keys(picture).length > 0 ? picture : defaultImage}
          alt={title ?? "event default image"}
        />
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
