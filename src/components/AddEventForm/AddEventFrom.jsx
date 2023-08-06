import { useNavigate } from "react-router-dom";
import { submitEvent } from "../../services/API";
import useEventStore from "../../services/eventStore";
import { useForm } from "react-hook-form";

import {
  StyledForm,
  LabelStyled,
  InputStyled,
  TextareaStyled,
  SelectStyled,
  ErrorStyled,
  SelectWrap,
} from "./AddEventFrom.styled";
import { RiArrowDownSLine } from "react-icons/ri";
import { VscClose } from "react-icons/vsc";

const validationRules = {
  title: {
    required: "Title is required",
    minLength: {
      value: 3,
      message: "Name must have at least 3 characters",
    },
    pattern: {
      value: /^(?=[a-z0-9])[a-z0-9\s]{2,30}[a-z0-9]$/i,
      message: "Invalid input",
    },
  },

  description: {
    required: "Description is required",
    minLength: {
      value: 10,
      message: "Name must have at least 10 characters",
    },
    pattern: {
      value: /^(?=[a-z0-9])[a-z0-9\s]{9,80}[a-z0-9.]$/i,
      message: "Invalid input",
    },
  },

  location: {
    required: "Location is required",
    minLength: {
      value: 3,
      message: "Location  must have at least 3 characters",
    },
    maxLength: {
      value: 15,
      message: "Location  must have at least 15 characters",
    },
    pattern: {
      value: /^(?=[a-z0-9])[a-z0-9\s]{2,15}[a-z0-9]$/i,
      message: "Invalid input",
    },
  },
};

const eventCategory = [
  "art",
  "music",
  "business",
  "conference",
  "workshop",
  "party",
  "sport",
];

// const priorityCategory = ["high", "medium", "low"];

const AddEventForm = () => {
  const navigate = useNavigate();
  const addEvent = useEventStore((state) => state.addEvent);

  const {
    register,
    handleSubmit,
    // reset,
    // setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  //   const handleDeleteInput = (field) => {
  //     setValue(field, "");
  //   };

  const onSubmit = async (data) => {
    try {
      const response = await submitEvent(data, addEvent);
      console.log("Added event", response);
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  const onCloseClick = () => {};

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <LabelStyled>
          Title
          <SelectWrap>
            <VscClose
              onClick={onCloseClick}
              size="24"
              color={errors.title ? "#FF2B77" : "#7b61ff"}
            />
            <InputStyled
              {...register("title", validationRules.title)}
              placeholder="Input"
              type="text"
              name="title"
              style={{
                outlineColor: errors.title && "transparent",
                borderColor: errors.title && "#FF2B77",
              }}
            />
          </SelectWrap>
          {errors.title && <ErrorStyled>{errors.title.message}</ErrorStyled>}
        </LabelStyled>
        <LabelStyled style={{ gridRowStart: 2, gridRowEnd: 4 }}>
          Description
          <SelectWrap>
            <VscClose
              size="24"
              color={errors.description ? "#FF2B77" : "#7b61ff"}
            />
            <TextareaStyled
              {...register("description", validationRules.description)}
              placeholder="Input"
              type="text"
              rows="5"
              name="description"
              style={{
                outlineColor: errors.description && "transparent",
                borderColor: errors.description && "#FF2B77",
              }}
            />
          </SelectWrap>
          {errors.description && (
            <ErrorStyled>{errors.description.message}</ErrorStyled>
          )}
        </LabelStyled>
        <LabelStyled>
          Select date
          <SelectWrap>
            <InputStyled
              {...register("date", { required: "required field" })}
              placeholder="Input"
              type="date"
              name="date"
            />
          </SelectWrap>
          {errors.date && <ErrorStyled>{errors.date.message}</ErrorStyled>}
        </LabelStyled>
        <LabelStyled>
          Select time
          <SelectWrap>
            <InputStyled
              {...register("time", { required: "required field" })}
              placeholder="Input"
              type="time"
              name="time"
            />
          </SelectWrap>
          {errors.time && <ErrorStyled>{errors.time.message}</ErrorStyled>}
        </LabelStyled>

        <LabelStyled>
          Location
          <SelectWrap>
            <VscClose
              size="24"
              color={errors.location ? "#FF2B77" : "#7b61ff"}
            />
            <InputStyled
              {...register("location", validationRules.location)}
              placeholder="Input"
              type="text"
              name="location"
              style={{
                outlineColor: errors.location && "transparent",
                borderColor: errors.location && "#FF2B77",
              }}
            />
          </SelectWrap>
          {errors.location && (
            <ErrorStyled>{errors.location.message}</ErrorStyled>
          )}
        </LabelStyled>
        <LabelStyled>
          Category
          <SelectWrap>
            <RiArrowDownSLine size="24" color="#7b61ff" />
            <SelectStyled
              {...register("category")}
              placeholder="Select"
              name="category"
            >
              {eventCategory.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </SelectStyled>
          </SelectWrap>
        </LabelStyled>
        <LabelStyled style={{ color: "#ACA7C3" }}>
          Add picture
          <SelectWrap>
            <VscClose size="24" color="#ACA7C3" />
            <InputStyled
              placeholder="Input"
              disabled
              name="picture"
              style={{ borderColor: "#ACA7C3", outlineColor: "transparent" }}
            />
          </SelectWrap>
        </LabelStyled>
        <LabelStyled>
          Priority
          <SelectWrap>
            <RiArrowDownSLine size="24" color="#7b61ff" />
            <SelectStyled
              {...register("priority")}
              placeholder="Select"
              name="priority"
              selected
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </SelectStyled>
          </SelectWrap>
        </LabelStyled>
        {/* <Button option="button" type="submit" title={btnTitle} /> */}
        <button type="submit">Save</button>
      </StyledForm>
    </>
  );
};

export default AddEventForm;
