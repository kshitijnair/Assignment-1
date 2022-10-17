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
    // change theme here
    if (themeClass.contains("light")) {
        themeBtn.innerHTML = "Dark Mode"
        localStorage.setItem('userTheme', 'light');
    } else {
        themeBtn.innerHTML = "Light Mode"
        localStorage.setItem('userTheme', 'dark');
    }
    console.log(localStorage.getItem('userTheme'))
}

themeBtn.addEventListener('click', toggleTheme)



