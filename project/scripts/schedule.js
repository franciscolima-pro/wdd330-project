import { loadFromLocalStorage } from './utils.js';

let currentYear = new Date().getFullYear();
document.querySelector('#currentYear').textContent = `${currentYear} `;

let lastModified = document.lastModified;
document.querySelector('#lastModified').textContent = `Last Modification: ${lastModified}`;

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

function displaySchedule(){
let scheduleBox = document.querySelector('.raceschedule');
const events = loadFromLocalStorage('registrations');
events.forEach(event => {
    const eventDiv = document.createElement('div');
    eventDiv.classList.add('eventDiv');
    eventDiv.innerHTML = `
    <h2>You are registered for:</h2>
    <h3></b>"${event.chosenEventTitle}"</b></h3>
    <p>Date of the event: <b>${event.chosenEventDate}</b></p>
    <p>Event Code: <b>${event.chosenEventCode}</b></p>
    <p>Registered at: <b>${event.date}</b></p>
    `
    scheduleBox.appendChild(eventDiv);
})
}

window.addEventListener('DOMContentLoaded', displaySchedule);