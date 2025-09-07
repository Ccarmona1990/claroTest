
// Dark mode button Added dynamically to HTML
const themeSwitchBtn = ()=> {
    const header = document.querySelector("header");
header.innerHTML += 
`
<button id="theme-switch">

<i class="fa fa-moon fa-1x"></i>

<i class="fa fa-lightbulb fa-1x"></i>

</button>
`};

export const darkModeFunctionality = () => {
    // Calls the function to add the button
    themeSwitchBtn();

    // Dark mode functionality
    let darkmode = localStorage.getItem("darkmode");
    const themeSwitch = document.getElementById("theme-switch");

    const enableDarkMode = () => {
    document.body.classList.add("darkMode");
    localStorage.setItem("darkmode", "active");
    };

    const disableDarkMode = () => {
    document.body.classList.remove("darkMode");
    localStorage.setItem("darkmode", "inactive");
    }
    if(darkmode === "active") enableDarkMode();
    
    themeSwitch.addEventListener("click", () => {
        darkmode = localStorage.getItem("darkmode");
        darkmode !== "active" ? enableDarkMode() :  disableDarkMode();
    });
    }
    