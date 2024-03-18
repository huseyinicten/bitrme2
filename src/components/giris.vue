<template>
<div class="giris">
    <img class="logo" src="../assets/users.png" />
  <h1>GİRİŞ YAPINIZ</h1>
   
  
  <div class="form-container">
      <input type="text" class="mail" placeholder="KULLANICI ADI GİRİNİZ" v-model="username" />
      <input type="password" class="parola" placeholder="ŞİFRE GİRİNİZ" v-model="password" />
    </div>
      
    <div class="koder">
    <div class="koder-yazi">
      <div class="sifresim">
         <img src="/src/assets/sifrelemeresim.png" alt="Captch Background">
        <span class="sifrele"></span>
      </div>
      <button class="kyenile">↻</button>
    </div>
    <input type="text" class="giris-yazi" placeholder="KODU GİRİNİZ" maxlength="6" spellcheck="false" required>
     <button class="giris-btn">GİRİŞ</button>
     <div class="durum"></div>
     <p class="uyar"> ŞİFREMİ UNUTTUM! </p>
   
    </div>
</div>
      
  </template>



<script  >
export default {
  name: "giris",
  };
</script>


<style scoped>
h1 {
  margin-top: 2rem;
  font-size: 2rem;
  color: white;
  text-align: center;
  font-family: Arial, sans-serif;
}
.form-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;

  
}


</style>
