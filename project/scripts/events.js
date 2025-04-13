import { searchItem, loadFromLocalStorage, saveToLocalStorage } from './utils.js';
import  Registration  from './models.js';
import {data1} from '../data/events-data.js'

let currentYear = new Date().getFullYear();
document.querySelector('#currentYear').textContent = `${currentYear} `;

let lastModified = document.lastModified;
document.querySelector('#lastModified').textContent = `Last Modification: ${lastModified}`;

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

 const raceBox = document.querySelector('.races'); 

 function displayRace(){
    data1.forEach(element => {
      let race1 = document.createElement('div');
      race1.classList.add('race');
      race1.innerHTML= `
      <img src="${element.image}" alt="Race Image" loading="lazy">
      <div>
          <h2>${element.title}</h2>
          <h2>${element.date}</h2>
          <p>${element.description}</p>
          <p><b>Event Code: ${element.code}</b></p>
      </div> 
      `
      raceBox.appendChild(race1)
    });
 }

 function signupForm(){
  const dialog = document.querySelector('#signupDialog');
  dialog.innerHTML = `
   <form onsubmit="handleSubmit(event)" class="formDialog">
    <h2 class="text-xl font-bold mb-4">Sign up for the event</h2>

    <label class="block mb-2">
      <span class="text-sm font-medium">Full Name</span>
      <input type="text" name="fullName" required class="w-full border px-3 py-2 rounded" />
    </label>

    <label class="block mb-2">
      <span class="text-sm font-medium">Email</span>
      <input type="email" name="email" required class="w-full border px-3 py-2 rounded" />
    </label>

    <label class="block mb-4">
      <span class="text-sm font-medium">Phone</span>
      <input type="tel" name="phone" class="w-full border px-3 py-2 rounded" />
    </label>

    <label class="block mb-2">
      <span class="text-sm font-medium">Event Code</span>
      <input type="text" name="eventCode" required class="w-full border px-3 py-2 rounded" />
    </label>

    <div class="flex justify-end gap-2">
      <button type="submit" class="bg-green-600 text-white px-4 submit-btn py-2 rounded hover:bg-green-700">
        Submit
      </button>
      <button type="button" onclick="document.getElementById('signupDialog').close()" class="bg-gray-300 cancel-btn px-4 py-2 rounded hover:bg-gray-400">
        Cancel
      </button>
    </div>
  </form>
  `
 }

 window.handleSubmit = function(event){
  event.preventDefault();
  const form = event.target;
  const { fullName, email, phone, eventCode } = form;

  const chosenEvent = searchItem(eventCode.value, data1);
  if (!chosenEvent) {
    alert('Invalid event code!');
    return;
  }
  const registration = new Registration({
    fullName: fullName.value,
    email: email.value,
    phone: phone.value,
    chosenEventCode: chosenEvent.code,
    chosenEventTitle: chosenEvent.title,
    chosenEventDate: chosenEvent.date,
    date: new Date().toLocaleString()
  });

  const registrations = loadFromLocalStorage('registrations');
  registrations.push(registration);
  saveToLocalStorage('registrations', registrations);

  alert('Registration successful!');
  form.reset();
  document.getElementById('signupDialog').close();
}

 signupForm();
 window.addEventListener('DOMContentLoaded', displayRace);