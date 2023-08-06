// import Select from "react-select";
// import styled from "styled-components";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const CustomSelect = styled(Select)`
//   /* Ваші стилі для react-select */
// `;

// const TimePickerContainer = styled.div`
//   display: inline-block;
//   position: relative;
// `;

// const TimePickerInput = styled.input`
//   width: 100px;
//   padding: 8px;
// `;

// const TimePickerIcon = styled.span`
//   position: absolute;
//   right: 8px;
//   top: 50%;
//   transform: translateY(-50%);
//   cursor: pointer;
// `;

// const TimePicker = ({ selected, onChange }) => {
//   return (
//     <TimePickerContainer>
//       <DatePicker
//         selected={selected}
//         onChange={onChange}
//         showTimeSelect
//         showTimeSelectOnly
//         timeIntervals={15}
//         timeCaption="Time"
//         dateFormat="h:mm aa"
//         customInput={<TimePickerInput />}
//       />
//       <TimePickerIcon>▼</TimePickerIcon>
//     </TimePickerContainer>
//   );
// };

// const SelectWrapper = ({ label, id, register }) => {
//   const [selectedTime, setSelectedTime] = useState(null);

//   return (
//     <div>
//       <label htmlFor={id}>{label}:</label>
//       <CustomSelect {...register(id)} options={formatOptions()} />
//       <TimePicker
//         selected={selectedTime}
//         onChange={(date) => setSelectedTime(date)}
//       />
//     </div>
//   );
// };

// export default SelectWrapper;
