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
        bodyElement.classList.add('light-background');
        bodyElement.classList.remove('dark-background');
        localStorage.setItem('userTheme', 'light');
    } else {
        themeBtn.innerHTML = "Light Mode";
        bodyElement.classList.add('dark-background');
        bodyElement.classList.remove('white-background');
        localStorage.setItem('userTheme', 'dark');
    }
    console.log(localStorage.getItem('userTheme'))
}

themeBtn.addEventListener('click', toggleTheme)