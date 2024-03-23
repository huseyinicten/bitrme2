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
          <img src="/src/assets/sifrelemeresim.png" alt="Captch Background" />
          <span class="sifrele"></span>
        </div>
        <button class="kyenile" @click="yenile">↻</button>
      </div>
      <input type="text" class="giris-yazi" placeholder="KODU GİRİNİZ" maxlength="6" spellcheck="false" required v-model="captcha" />
      <button class="giris-btn" @click="giris">GİRİŞ</button>
      <div class="durum">{{ durum }}</div>
      <p class="uyar"> ŞİFREMİ UNUTTUM! </p>
    </div>
  </div>
</template>
<script>


export default {
  name: 'giris',
  data() {
    return {
      username: '',
      password: '',
      captcha: '',
      durum: '',
    };
  },
  methods: {
    yenile() {
      this.captcha = '';
      this.durum = '';
      this.getSifrele();
    },
    getSifrele() {
      const sifrele = document.querySelector('.sifrele');
      const allCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      sifrele.innerText = '';
      for (let i = 0; i < 5; i++) {
        const randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        sifrele.innerText += ` ${randomCharacter}`;
      }
    },
    giris() {
      const inputVal = this.captcha.split('').join(' ');
      if (inputVal === document.querySelector('.sifrele').innerText && this.username === 'huss' && this.password === '1234') {
        
       this.$router.push('/sayfa2');
    
   
        this.durum = 'GİRİŞ YAPILDI';
        
        setTimeout(() => {

        }, 2000);
      } else {
        this.durum = 'LÜTFEN TEKRAR DENEYİN!';
      }
    },
  },
  mounted() {
    this.getSifrele();
  },
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