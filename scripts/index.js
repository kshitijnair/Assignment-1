// Theme Toggle
let themeBtn = document.body.querySelector("#themeBtn");

// Set theme 
let userTheme = localStorage.getItem('userTheme')
if (userTheme === 'light') {
    console.log("user wants light theme")
    // do nothing
} else if (userTheme === 'dark') {
    console.log("user wants dark theme")
    toggleTheme();
}

function toggleTheme() {
    themeBtn.classList.toggle("light");
    themeBtn.classList.toggle("dark");
    let themeClass = themeBtn.classList;
    let bodyElement = document.body;
    // change theme here
    if (themeClass.contains("light")) {
        themeBtn.innerHTML = "Dark Mode";
        bodyElement.style.backgroundImage = 'linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) ), url("./assets/light-index.jpg")';
        bodyElement.style.color = "rgb(20,20,20)";
        localStorage.setItem('userTheme', 'light');
    } else {
        themeBtn.innerHTML = "Light Mode";
        bodyElement.style.backgroundImage = 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("./assets/light-index.jpg")';
        bodyElement.style.color = "rgb(220, 220, 220)";
        localStorage.setItem('userTheme', 'dark');
    }
    console.log(localStorage.getItem('userTheme'))
}

themeBtn.addEventListener('click', toggleTheme)



