import { MainSection } from "../MainPage/MainPage.styled";
import { CreateEventTitle } from "./CreateEventPage.styled";
import AddEventForm from "../../components/AddEventForm/AddEventFrom";
import { BackButton } from "../../components/BackButton/BackButton";

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
