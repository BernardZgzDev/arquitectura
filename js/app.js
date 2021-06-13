const spanYear = document.querySelector('span#year-copyright');
const now  = new Date();
const year = now.getFullYear();

spanYear.innerText = year;