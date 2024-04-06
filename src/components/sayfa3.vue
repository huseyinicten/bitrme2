<template>
  <div class="forum">
    <h2>New Submission</h2>
  
    <div class="form-group">
      <label for="manuscript-title">Enter title of manuscript</label>
      <input type="text" id="manuscript-title" v-model="title" placeholder="Enter title of manuscript" />
    </div>

    <div class="form-group">
      <label for="manuscript-type">Type of manuscript</label>
      <select id="manuscript-type" v-model="type">
        <option disabled value="">Type of manuscript</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
    </div>

    <div class="form-group">
      <label for="abstract">Write abstract</label>
      <textarea id="abstract" v-model="abstract" placeholder="Write abstract"></textarea>
    </div>

    <div class="form-group">
      <label>Enter Keyword</label>
      <textarea id="keyword" v-model="keyword" placeholder="Enter keyword"></textarea>
    </div>
      
    <fieldset class="di-fieldset">
      <legend>Select form area</legend>
      <label>
        <input type="radio" value="Natural Scene" v-model="selectedScene"> Natural Scene
      </label>
      <br>
      <label>
        <input type="radio" value="Engineering Scene" v-model="selectedScene"> Engineering Scene
      </label>
    </fieldset>
    <div v-if="selectedScene === 'Natural Scene'">
    </div>
    <div v-else-if="selectedScene === 'Engineering Scene'">
    </div>

    <div class="form-group">
      <label for="message">Your message</label>
      <textarea id="message" v-model="message" placeholder="Enter your message"></textarea>
    </div>

    <label>Please suggest three referees: at least one referee must be out of your country</label>
    <div v-for="referee in referees" :key="referee.id" class="input">
      <input v-model="referee.name" type="text" placeholder="Ad Soyad">
      <input v-model="referee.email" type="text" placeholder="E-posta">
      <input v-model="referee.university" type="text" placeholder="Üniversite Adı">
    </div>
  
    <div>
      <label>Being Reviewer</label>
      <label class="checkbox-label">
        <input type="checkbox" v-model="isChecked" @change="handleChange" />
        I am accepting to be a Reviewer in Nesciences
      </label>
    </div>

    <div>
      <label>Please Add, Edit or Remove Authors</label>
    </div>

    <div style="border: 1px solid black; padding: 10px;">
      <h3>Current Author List</h3>
      <ul>
        <li v-for="item in selectedItems" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
      <select v-model="selectedItem">
        <option v-for="item in items" :key="item.id" :value="item">
          {{ item.name }}
        </option>
      </select>
      <button style="background-color: darkblue; color: white;" @click="addItem">Ekle</button>
    </div>

    <div class="form-group">
      <label for="file-upload">Upload Manuscript File</label>
      <input type="file" id="file-upload" @change="handleFileUpload">
    </div>
    
    <div class="form-group">
      <label>Compliance with Ethical Standards" Please declare whether the results of the study Involve human and/or animal rights</label>
      <div clas="radio-buttons">
    <input type="radio" id="yes" value="Yes" v-model="ethicalStandard">
    <label for="yes">Yes</label>
    <input type="radio" id="no" value="No" v-model="ethicalStandard">
    <label for="no">No</label>
  </div>
    </div>
    
    <div v-if="ethicalStandard === 'Yes'" class="form-group">
      <label>Additional File for Ethical Standards</label>
      <input type="file" @change="handleEthicalFileUpload">
    </div>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      type: '',
      abstract: '',
      keyword: '',
      message: '',
      referees: [
        { id: 1, name: '', email: '', university: '' },
        { id: 2, name: '', email: '', university: '' },
        { id: 3, name: '', email: '', university: '' }
      ],
      isChecked: false,
      selectedItem: null,
      selectedItems: [],
      uploadedFile: null,
      ethicalStandard: null
    };
  },
  computed: {
    items() {
      return [
        { id: 1, name: 'YAKUP KUTLU' },
        { id: 2, name: 'YAKUP KUTLU' },
        { id: 3, name: 'YAKUP KUTLU' },
      ];
    }
  },
  methods: {
    addItem() {
      if (this.selectedItem) {
        this.selectedItems.push(this.selectedItem);
        this.selectedItem = null;
      }
    },
    handleChange() {
      // handle checkbox change
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.uploadedFile = file;
    },
    handleEthicalFileUpload(event) {
      const file = event.target.files[0];
      // Handle the uploaded file related to ethical standards
    }
  }
};
</script>

<style scoped>
</style>
