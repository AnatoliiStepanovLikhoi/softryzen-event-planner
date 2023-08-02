import { useForm } from "react-hook-form";
import { submitEvent } from "../../services/API";
import useEventStore from "../../services/eventStore";

const eventCategory = [
  "art",
  "music",
  "business",
  "conference",
  "workshop",
  "party",
  "sport",
];

const priorityCategory = ["high", "medium", "low"];

const CreateEventPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const addEvent = useEventStore((state) => state.addEvent);

  const onSubmit = async (data) => {
    try {
      await submitEvent(data, addEvent);
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            {...register("title", {
              required: "Required",
              pattern: /^[a-zA-Z\s]+$/,
            })}
          />
          {errors.title && <div>{errors.title.message}</div>}
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" {...register("description")} />
        </div>

        <div>
          <label htmlFor="date">Select Date:</label>
          <input type="date" id="date" {...register("date")} />
        </div>

        <div>
          <label htmlFor="time">Select Time:</label>
          <input type="time" id="time" {...register("time")} />
        </div>

        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            {...register("location", {
              required: "Required",
              pattern: /^[a-zA-Z\s]+$/,
            })}
          />
          {errors.location && <div>{errors.location.message}</div>}
        </div>

        <div>
          <label htmlFor="category">Category:</label>
          <select id="category" {...register("category")}>
            <option value="">Select a category</option>
            {eventCategory.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="picture">Add picture:</label>
          <input type="file" id="picture" {...register("picture")} />
        </div>

        <div>
          <label htmlFor="priority">Priority:</label>
          <select id="priority" {...register("priority")}>
            {priorityCategory.map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreateEventPage;
