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
        <button class="kyenile">↻</button>
      </div>
      <input type="text" class="giris-yazi" placeholder="KODU GİRİNİZ" maxlength="6" spellcheck="false" required />
      <button class="giris-btn">GİRİŞ</button>
      <div class="durum"></div>
      <p class="uyar"> ŞİFREMİ UNUTTUM! </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "giris",
  mounted() {
    const sifrele = document.querySelector(".sifrele");
    const email = document.querySelector(".mail");
    const parol = document.querySelector(".parola");
    const yenileBtn = document.querySelector(".kyenile");
    const kgirdi = document.querySelector(".giris-yazi");
    const girisBtn = document.querySelector(".giris-btn");
    const durumTxt = document.querySelector(".durum");
    const allCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    function getsifrele() {
      for (let i = 0; i < 5; i++) {
        const randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        sifrele.innerText += ` ${randomCharacter}`;
      }
    }

    getsifrele();

    yenileBtn.addEventListener("click", () => {
      removeContent();
      getsifrele();
    });

    girisBtn.addEventListener("click", (e) => {
      e.preventDefault();
      durumTxt.style.display = "block";

      const inputVal = kgirdi.value.split("").join(" ");
      if (inputVal === sifrele.innerText && email.value === "huss" && parol.value === "1234") {
        durumTxt.style.position = "relative";
        durumTxt.style.top = "-20px";
        durumTxt.style.color = "#4db2ec";
        durumTxt.innerText = "GİRİŞ YAPILDI";
        setTimeout(() => {
          removeContent();
          getsifrele();
        }, 2000);
      } else {
        durumTxt.style.position = "relative";
        durumTxt.style.top = "-10px";
        durumTxt.style.color = "#ff0000";
        durumTxt.innerText = " LÜTFEN TEKRAR DENEYİN!";
      }
    });

    function removeContent() {
      kgirdi.value = "";
      sifrele.innerText = "";
      durumTxt.style.display = "none";
    }
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