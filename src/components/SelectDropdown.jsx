import { useDispatch } from "react-redux";

function SelectDropdown({ options, value, setValue }) {
  const dispatch = useDispatch();
  function handleChange(e) {
    dispatch(setValue(e.target.value));
  }
  return (
    <select value={value} onChange={handleChange}>
      {options?.map((option, i) => (
        <option
          value={option.includes("day") ? i : option.toLowerCase()}
          key={i}
        >
          {option}
        </option>
      ))}
    </select>
  );
}

export default SelectDropdown;
