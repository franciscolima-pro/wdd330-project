let currentYear = new Date().getFullYear();
document.querySelector('#currentYear').textContent = `${currentYear} `;

let lastModified = document.lastModified;
document.querySelector('#lastModified').textContent = `Last Modification: ${lastModified}`;

let url = window.location.href;

url = url.split('?')[1];

const urlArray = url.split('&');
console.log(urlArray)

function showdata(key){
    for(let i of urlArray){
        if(i.startsWith(key)){
            const result = i.split('=')[1].replace('%40','@').replace('+',' ');
            return result
        }   
    }
}

const timestampInput = document.getElementById('timestamp');
let date = new Date();
let dateDay = date.toLocaleDateString("en-US");
let dateTime = date.toLocaleTimeString("en-US");
date = dateDay+' '+dateTime;
if (timestampInput) {
    timestampInput.value = date;
}

const showInfo = document.getElementById('results');
showInfo.innerHTML = `
<h1>Data</h1>
<p><b>Name:</b> ${showdata('fname')} ${showdata('lname')}</p>
<p><b>Email:</b> ${showdata('email')}</p>
<p><b>Phone:</b> ${showdata('userphone')}</p>
<p><b>Submission Date:</b> ${date}</p>`