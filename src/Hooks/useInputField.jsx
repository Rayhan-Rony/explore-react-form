import { useState } from "react";

const useInputField = (defaultValue) => {
  const [fieldValue, setFieldValue] = useState(defaultValue);
  const handleOnchangeField = (e) => {
    setFieldValue(e.target.value);
  };
  return [fieldValue, handleOnchangeField];
};
export default useInputField;
