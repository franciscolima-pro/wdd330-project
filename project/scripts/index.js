import { data } from './index-data.js';

let currentYear = new Date().getFullYear();
document.querySelector('#currentYear').textContent = `${currentYear} `;

let lastModified = document.lastModified;
document.querySelector('#lastModified').textContent = `Last Modification: ${lastModified}`;

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });


const ctemp = document.getElementById('ctemp');
const icon = document.getElementById('weather-icon');
const tdTemp = document.getElementById('tdtemp');
const wedTemp = document.getElementById('wedtemp');
const thursTemp = document.getElementById('thurstemp');

const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lat=-25.42627&lon=-49.25784&appid=3c84c10ac1ef9db1531604790eda690e';
const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=-25.42627&lon=-49.25784&appid=3c84c10ac1ef9db1531604790eda690e`

async function apiFetch(){
  try {
      const [response, response2] = await Promise.all([fetch(url), fetch(url2)]);  // Fazendo a requisição para a URL e armazenando na variável `response`

      // Verificando se a resposta foi bem-sucedida
      if(response.ok && response2.ok){
          // Convertendo os dados para JSON e armazenando na variável `data`
          const data = await response.json();
          const data2 = await response2.json();

          console.log(data);
          console.log(data2);
          displayResults(data, data2);
      }
  } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
  }
};

function displayResults(data, data2){

  const tuesday = data2.list[7].main.temp - 273.15;
  tdTemp.innerHTML = `${tuesday.toFixed(2)}°C`;

  const wednesday = data2.list[15].main.temp - 273.15;
  wedTemp.innerHTML = `${wednesday.toFixed(2)}°C`;

  const thursday = data2.list[23].main.temp - 273.15;
  thursTemp.innerHTML = `${thursday.toFixed(2)}°C`;

  ctemp.innerHTML = `${data.main.temp}&deg;C`;    // Atualiza a temperatura no elemento do HTML;

  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;  // Cria o caminho completo para o ícone do clima
  let desc = data.weather[0].description;
  // Atualiza o atributo 'src' e 'alt' da imagem do ícone
  icon.setAttribute('src', iconsrc);
  icon.setAttribute('alt', desc)

};

const myModal = document.getElementById('myModal');
const modalTitle = document.querySelector('#myModal h2');
const modalDesc = document.querySelector('#myModal ul');
const modalButton = document.querySelectorAll('.learnMore');
const closeModal = document.querySelector('#myModal button');

function showData(i){
    modalTitle.innerHTML = i.title;
    modalDesc.innerHTML = i.desc;
}
closeModal.addEventListener('click', ()=>{[
    myModal.close()
]})

modalButton[0].addEventListener('click',()=>{
    showData(data[0])
    myModal.showModal();
});
modalButton[1].addEventListener('click',()=>{
    showData(data[1])
    myModal.showModal();
});
modalButton[2].addEventListener('click',()=>{
    showData(data[2])
    myModal.showModal();
});

// Chamando a função para executar
apiFetch();