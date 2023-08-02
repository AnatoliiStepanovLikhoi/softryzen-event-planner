import axios from "axios";

export const submitEvent = async (data, addEvent) => {
  try {
    const response = await axios.post(
      "https://6468ba5260c8cb9a2cb077de.mockapi.io/api/events",
      data
    );
    const newEvent = { ...response.data, id: new Date().getTime() };
    addEvent(newEvent);
    console.log("Event successfully created:", response.data);
  } catch (error) {
    console.error("Error creating event:", error);
  }
};
