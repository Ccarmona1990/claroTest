import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLightbulb,faMoon} from '@fortawesome/free-solid-svg-icons'

const DarkmodeBtn = () => {
  // State to manage dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  // useEffect to handle the side effects, like accessing localStorage and body class
  useEffect(() => {
    const darkmode = localStorage.getItem("darkmode");
    if(darkmode === "active") {
        document.body.classList.add("darkMode");
        setIsDarkMode(true);
    }
  }, []);
  useEffect(() => {
    if(isDarkMode) {
        document.body.classList.add("darkMode");
        localStorage.setItem("darkmode", "active");
      } else {
        document.body.classList.remove("darkMode");
        localStorage.setItem("darkmode", "inactive");
      }
  }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    }
  return (
    <button onClick={toggleTheme} id="theme-switch">
      {
      isDarkMode ?
      (<FontAwesomeIcon
        icon={faMoon}
        color="white"/>) : 
      (<FontAwesomeIcon
      icon={faLightbulb}/>)
      }
    </button>
  )
}

export default DarkmodeBtn;