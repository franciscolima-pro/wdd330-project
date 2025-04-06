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
      </div> 
      `
      raceBox.appendChild(race1)
    });
 }

 displayRace();