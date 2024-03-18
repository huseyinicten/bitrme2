import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const sifrele = document.querySelector(".sifrele"),
email= document.querySelector(".mail"),
parol= document.querySelector(".parola"),
yenileBtn = document.querySelector(".kyenile"),
kgirdi = document.querySelector(".giris-yazi "),
girisBtn = document.querySelector(".giris-btn"),
durumTxt = document.querySelector(".durum");
let allCharacters = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getsifrele(){
  for (let i = 0; i < 5; i++) { 
    let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    sifrele.innerText += ` ${randomCharacter}`; 
  }
}

getsifrele(); 

yenileBtn.addEventListener("click", ()=>{
  removeContent();
  getsifrele();
});

girisBtn.addEventListener("click", e =>{
  e.preventDefault(); 
  durumTxt.style.display = "block";
  
  let inputVal = kgirdi.value.split('').join(' ');
  if (inputVal === sifrele.innerText && email.value === "huss" && parol.value === "1234")
{
        durumTxt.style.position = "relative";
         durumTxt.style.top = "-20px";
         durumTxt.style.color = "#4db2ec";
        durumTxt.innerText = "GİRİŞ YAPILDI";
    setTimeout(()=>{ 
       ;
     
        removeContent();
      getsifrele();
    }, 2000);
  }else{
     
     durumTxt.style.position = "relative";
     durumTxt.style.top = "-10px";
     durumTxt.style.color = "#ff0000";
     durumTxt.innerText = " LÜTFEN TEKRAR DENEYİN!";
  }
});

function removeContent(){
  kgirdi.value = "";
  sifrele.innerText = "";
  durumTxt.style.display = "none";
}