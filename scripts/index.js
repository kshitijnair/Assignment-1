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

// Date and Time Buttons
const form = document.body.querySelector("#radioForm")
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("FORM WAS SUBMITTED");
    const formData = new FormData(form);
    console.log(formData.get('selection'))
    let formOutput;
    if (document.body.querySelector("#calendarID") === null) {
        formOutput = document.createElement('div');
        formOutput.setAttribute("id", "calendarID");
    } else {
        formOutput = document.body.querySelector("#calendarID");
    }
    const dataType = formData.get('selection');
    let text = '';
    const date = new Date()
    if (dataType === 'dateID') {
        text = `The current date is: ${date.toString().slice(0,15)}`;
    } else if (dataType === 'timeID') {
        const date = new Date();
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            second:'numeric',
            hour12: true
        };
        const timeString = date.toLocaleString('en-US', options);
        console.log(timeString);
        text = `The current time is: ${timeString}`;
    } else {
        text = `Uh Oh, you did not select an option!`;
    }
    formOutput.innerHTML = text.toString();
    form.appendChild(formOutput)
})

