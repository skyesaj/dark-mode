import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect } from "react";

const DarkMode = (key, value) => {
  //   const [darkValue, setDarkValue] = useLocalStorage(key, value);
  const [toggle, setToggle] = useLocalStorage(key, value);

  useEffect(() => {
    if (toggle === true) {
      document.querySelector("body").classList.add("dark-mode");
    } else {
      document.querySelector("body").classList.remove("dark-mode");
    }
  }, [toggle]);

  return [toggle, setToggle];
};
//   const handleChange = updatedValue => {
//     setDarkValue(updatedValue);
//   };
//   return [darkValue, handleChange];
// }

export default DarkMode;
