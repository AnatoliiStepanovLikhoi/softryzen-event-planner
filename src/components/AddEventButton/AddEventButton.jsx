import {
  AddEventBtn,
  AddEventIcon,
  AddEventTitle,
} from "./AddEventButton.styled";

const AddEventButton = () => {
  return (
    <AddEventBtn to="/create">
      <AddEventIcon />
      <AddEventTitle>Add new event</AddEventTitle>
    </AddEventBtn>
  );
};

export default AddEventButton;
