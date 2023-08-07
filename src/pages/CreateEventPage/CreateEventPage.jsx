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
  // const {
  //   register,
  //   handleSubmit,
  //   setValue,
  //   formState: { errors },
  // } = useForm();

  // const addEvent = useEventStore((state) => state.addEvent);

  // const handleDeleteInput = (field) => {
  //   setValue(field, "");
  // };

  // const onSubmit = async (data) => {
  //   try {
  //     const response = await submitEvent(data, addEvent);
  //     console.log("Added event", response);
  //   } catch (error) {
  //     console.error("Error creating event:", error);
  //   }
  // };

  return (
    <MainSection>
      <BackButton />
      <CreateEventTitle>Create new event</CreateEventTitle>
      <AddEventForm />

      {/* <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <TitleWrapper>
          <Label htmlFor="title">Title:</Label>
          <input
            type="text"
            id="title"
            {...register("title", {
              required: "Required",
              pattern: /^[a-zA-Z\s]+$/,
            })}
          />
          {errors.title && <div>{errors.title.message}</div>}
        </TitleWrapper>

        <DescWrapper>
          <Label htmlFor="description">Description:</Label>
          <textarea id="description" {...register("description")} />
        </DescWrapper>

        <SelectWrapper>
          <Label htmlFor="date">Select Date:</Label>
          <input type="date" id="date" {...register("date")} />
        </SelectWrapper>

        <SelectWrapper>
          <Label htmlFor="time">Select Time:</Label>
          <Datetime
            dateFormat={false}
            timeFormat="h:mm A"
            onChange={(selectedDate) => {
              setValue("time", selectedDate);
            }}
          />
        </SelectWrapper>

        <LocationWrapper>
          <Label htmlFor="location">Location:</Label>
          <input
            type="text"
            id="location"
            {...register("location", {
              required: "Required",
              pattern: /^[a-zA-Z\s]+$/,
            })}
          />
          {errors.location && <div>{errors.location.message}</div>}
        </LocationWrapper>

        <SelectWrapper>
          <Label htmlFor="category">Category:</Label>
          <select id="category" {...register("category")}>
            <option value="">Select a category</option>
            {eventCategory.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </SelectWrapper>

        <SelectWrapper>
          <Label htmlFor="picture">Add picture:</Label>
          <input type="file" id="picture" {...register("picture")} />
        </SelectWrapper>

        <SelectWrapper>
          <Label htmlFor="priority">Priority:</Label>
          <select id="priority" {...register("priority")}>
            {priorityCategory.map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </SelectWrapper>

        <button type="submit">Save</button>
      </FormWrapper> */}
    </MainSection>
  );
};

export default CreateEventPage;

//  return (
//     <MainSection>
//       <CreateEventTitle>Create new event</CreateEventTitle>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             {...register("title", {
//               required: "Required",
//               pattern: /^[a-zA-Z\s]+$/,
//             })}
//           />
//           {errors.title && <div>{errors.title.message}</div>}
//         </div>

//         <div>
//           <label htmlFor="description">Description:</label>
//           <textarea id="description" {...register("description")} />
//         </div>

//         <div>
//           <label htmlFor="date">Select Date:</label>
//           <input type="date" id="date" {...register("date")} />
//         </div>

//         <div>
//           <label htmlFor="time">Select Time:</label>
//           <input type="time" id="time" {...register("time")} />
//         </div>

//         <div>
//           <label htmlFor="location">Location:</label>
//           <input
//             type="text"
//             id="location"
//             {...register("location", {
//               required: "Required",
//               pattern: /^[a-zA-Z\s]+$/,
//             })}
//           />
//           {errors.location && <div>{errors.location.message}</div>}
//         </div>

//         <div>
//           <label htmlFor="category">Category:</label>
//           <select id="category" {...register("category")}>
//             <option value="">Select a category</option>
//             {eventCategory.map((category) => (
//               <option key={category} value={category}>
//                 {category}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label htmlFor="picture">Add picture:</label>
//           <input type="file" id="picture" {...register("picture")} />
//         </div>

//         <div>
//           <label htmlFor="priority">Priority:</label>
//           <select id="priority" {...register("priority")}>
//             {priorityCategory.map((priority) => (
//               <option key={priority} value={priority}>
//                 {priority}
//               </option>
//             ))}
//           </select>
//         </div>

//         <button type="submit">Save</button>
//       </form>
//     </MainSection>
//   );
