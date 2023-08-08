import { useNavigate } from "react-router-dom";
import { submitEvent } from "../../services/API";
import useEventStore from "../../services/eventStore";
import { useForm } from "react-hook-form";
import { validationRules } from "../../services/validationRules";
import { EVENTCATEGORY } from "../../constants/Caterories/categories";
import { useState, useRef } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

import {
  EventForm,
  EventLabel,
  EventInput,
  EventTextareaInput,
  EventSelect,
  EventError,
  EventSelectBox,
  EventFormButton,
  EventSelectOption,
} from "./AddEventFrom.styled";

import { RiArrowDownSLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const AddEventForm = () => {
  const navigate = useNavigate();
  const addEvent = useEventStore((state) => state.addEvent);

  const [openCategoryPanel, setOpenCategoryPanel] = useState(false);
  const [openPriorityPanel, setOpenPriorityPanel] = useState(false);

  const categoryRef = useRef(null);
  const priorityRef = useRef(null);

  const handleCategoryOutsideClick = () => {
    setOpenCategoryPanel(false);
  };

  const handlePriorityOutsideClick = () => {
    setOpenPriorityPanel(false);
  };

  useOutsideClick(categoryRef, handleCategoryOutsideClick);
  useOutsideClick(priorityRef, handlePriorityOutsideClick);

  const today = new Date();
  const minDate = today.toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    // reset,
    setValue,
    formState: { errors, dirtyFields, isValid },
  } = useForm({ mode: "onChange" });

  const handleClearInput = (fieldName) => {
    setValue(fieldName, "");
  };

  const onSubmit = async (data) => {
    try {
      const response = await submitEvent(data, addEvent);
      console.log("Added event", response);
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <>
      <EventForm onSubmit={handleSubmit(onSubmit)}>
        <EventLabel>
          Title
          <EventSelectBox>
            <IoClose
              onClick={() => handleClearInput("title")}
              size="24"
              color={errors.title ? "#FF2B77" : "#7b61ff"}
            />
            <EventInput
              {...register("title", validationRules.title)}
              placeholder="Input"
              type="text"
              name="title"
              style={{
                outlineColor: errors.title && "transparent",
                borderColor: errors.title && "#FF2B77",
              }}
            />
          </EventSelectBox>
          {errors.title && <EventError>{errors.title.message}</EventError>}
        </EventLabel>
        <EventLabel style={{ gridRowStart: 2, gridRowEnd: 4 }}>
          Description
          <EventSelectBox>
            <IoClose
              onClick={() => handleClearInput("description")}
              size="24"
              color={errors.description ? "#FF2B77" : "#7b61ff"}
            />
            <EventTextareaInput
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
          </EventSelectBox>
          {errors.description && (
            <EventError>{errors.description.message}</EventError>
          )}
        </EventLabel>
        <EventLabel>
          Select date
          <EventSelectBox>
            <EventInput
              {...register("date", { required: "required field" })}
              type="text"
              placeholder="Input"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              name="date"
              min={minDate}
            />
          </EventSelectBox>
          {errors.date && <EventError>{errors.date.message}</EventError>}
        </EventLabel>
        <EventLabel>
          Select time
          <EventSelectBox>
            <EventInput
              {...register("time", { required: "required field" })}
              type="text"
              placeholder="Input"
              onFocus={(e) => (e.target.type = "time")}
              onBlur={(e) => (e.target.type = "text")}
              name="time"
            />
          </EventSelectBox>
          {errors.time && <EventError>{errors.time.message}</EventError>}
        </EventLabel>

        <EventLabel>
          Location
          <EventSelectBox>
            <IoClose
              onClick={() => handleClearInput("location")}
              size="24"
              color={errors.location ? "#FF2B77" : "#7b61ff"}
            />
            <EventInput
              {...register("location", validationRules.location)}
              placeholder="Input"
              type="text"
              name="location"
              style={{
                outlineColor: errors.location && "transparent",
                borderColor: errors.location && "#FF2B77",
              }}
            />
          </EventSelectBox>
          {errors.location && (
            <EventError>{errors.location.message}</EventError>
          )}
        </EventLabel>
        <EventLabel>
          Category
          <EventSelectBox
            ref={categoryRef}
            onClick={() => {
              setOpenCategoryPanel(!openCategoryPanel);
              setOpenPriorityPanel(false);
            }}
          >
            <RiArrowDownSLine
              size="24"
              color="#7b61ff"
              style={{
                transform: openCategoryPanel && "rotate(180deg)",
              }}
            />
            <EventSelect
              {...register("category")}
              placeholder="Select"
              name="category"
            >
              {EVENTCATEGORY.map((category) => (
                <EventSelectOption key={category} value={category}>
                  {category}
                </EventSelectOption>
              ))}
            </EventSelect>
          </EventSelectBox>
        </EventLabel>
        <EventLabel style={{ color: "#ACA7C3" }}>
          Add picture
          <EventSelectBox>
            <IoClose
              size="24"
              color="#ACA7C3"
              onClick={() => handleClearInput("description")}
            />
            <EventInput
              placeholder="Input"
              disabled
              name="picture"
              style={{ borderColor: "#ACA7C3", outlineColor: "transparent" }}
            />
          </EventSelectBox>
        </EventLabel>
        <EventLabel>
          Priority
          <EventSelectBox
            ref={priorityRef}
            onClick={() => {
              setOpenPriorityPanel(!openPriorityPanel);
              setOpenCategoryPanel(false);
            }}
          >
            <RiArrowDownSLine
              size="24"
              color="#7b61ff"
              style={{
                transform: openPriorityPanel && "rotate(180deg)",
              }}
            />
            <EventSelect
              {...register("priority")}
              placeholder="Select"
              name="priority"
              selected
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </EventSelect>
          </EventSelectBox>
        </EventLabel>
        <EventFormButton
          aria-label="save event"
          type="submit"
          disabled={!isValid || Object.keys(dirtyFields).length === 6}
        >
          {Object.keys(dirtyFields).length === 7 ? "Save" : "Add event"}
        </EventFormButton>
      </EventForm>
    </>
  );
};

export default AddEventForm;
