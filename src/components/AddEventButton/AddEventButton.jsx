import {
  AddEventBtn,
  AddEventIcon,
  AddEventTitle,
} from "./AddEventButton.styled";

const AddEventButton = () => {
  return (
    <AddEventBtn to="/create" aria-label="Add new event">
      <AddEventIcon />
      <AddEventTitle>Add new event</AddEventTitle>
    </AddEventBtn>
  );
};

export default AddEventButton;
