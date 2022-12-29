//Store the darkmode choice in a local storage variable
let darkMode = localStorage.getItem('darkModeCentipede');

const darkModeToggle = document.getElementById('dark-mode-toggle');

//Check if dark mode is enabled
//If it's enabled, turn it off.
//If it's disabled, turn it on.

const enableDarkMode = () => {
    //1) Add a "darkMode" class to the body
    document.body.classList.remove('lightMode');
    document.body.classList.add('darkMode');
    //2) Update darkMode in the localStorage
    localStorage.setItem('darkModeCentipede', 'enabled');
}

const disableDarkMode = () => {
        //1) Remove a "darkMode" class to the body
        document.body.classList.remove('darkMode');
        document.body.classList.add('lightMode');
        //2) Update darkMode in the localStorage
        localStorage.setItem('darkModeCentipede', null);
}

if (darkMode === 'enabled'){
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode =  localStorage.getItem('darkModeCentipede');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    }else {
        disableDarkMode();
    }
})
