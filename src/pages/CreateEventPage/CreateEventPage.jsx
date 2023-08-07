// import { useForm } from "react-hook-form";
// import { submitEvent } from "../../services/API";
// import useEventStore from "../../services/eventStore";
import { MainSection } from "../MainPage/MainPage.styled";
import { CreateEventTitle } from "./CreateEventPage.styled";
import AddEventForm from "../../components/AddEventForm/AddEventFrom";
import { BackButton } from "../../components/BackButton/BackButton";

// import Datetime from "react-datetime";
// import "react-datetime/css/react-datetime.css";

// import {
//   FormWrapper,
//   TitleWrapper,
//   DescWrapper,
//   SelectWrapper,
//   LocationWrapper,
//   Label,
// } from "./CreateEventPage.styled";

// const eventCategory = [
//   "art",
//   "music",
//   "business",
//   "conference",
//   "workshop",
//   "party",
//   "sport",
// ];

// const priorityCategory = ["high", "medium", "low"];

const CreateEventPage = () => {
  return (
    <MainSection>
      <BackButton />
      <CreateEventTitle>Create new event</CreateEventTitle>
      <AddEventForm />
    </MainSection>
  );
};

export default CreateEventPage;
