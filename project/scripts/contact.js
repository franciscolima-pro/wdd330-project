let currentYear = new Date().getFullYear();
document.querySelector('#currentYear').textContent = `${currentYear} `;

let lastModified = document.lastModified;
document.querySelector('#lastModified').textContent = `Last Modification: ${lastModified}`;

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  const firstnameInput = document.getElementById('fname');
  const lastnameInput = document.getElementById('lname');

  const emailInput = document.getElementById('email');
  const userphoneInput = document.getElementById('userphone');

  // Carregar o valor salvo no localStorage quando a página for carregada
  firstnameInput.value = localStorage.getItem('firstname') || '';
  lastnameInput.value = localStorage.getItem('lastname') || '';

  emailInput.value = localStorage.getItem('email') || '';
  userphoneInput.value = localStorage.getItem('userphone') || '';

  // Atualizar o localStorage sempre que o usuário digitar algo
  firstnameInput.addEventListener('input', function () {
      localStorage.setItem('firstname', firstnameInput.value);
});

lastnameInput.addEventListener('input', function () {
  localStorage.setItem('lastname', lastnameInput.value);
});

emailInput.addEventListener('input', function () {
  localStorage.setItem('email', emailInput.value);
});

userphoneInput.addEventListener('input', function () {
localStorage.setItem('userphone', userphoneInput.value);
});