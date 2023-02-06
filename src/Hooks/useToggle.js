import { useState } from "react";
const useToggle = () => {
  const [value, setValue] = useState(false);
  setValue((value) => !value);
  return value;
};
export default useToggle;
