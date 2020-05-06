<template>
  <div>
    <div class="center-menu" v-if="!classSelected">
      <h1>Pick a class</h1>
      <div class="choice-menu">
        <a @click="selectClass('Druid')" class="choice-item">Druid</a>
        <a @click="selectClass('Wizard')" class="choice-item">Wizard</a>
      </div>
    </div>
    <div v-else>You are now a {{ selectedClass }}!</div>
  </div>
</template>
<script>
export default {
  name: "new-character",
  data() {
    return {
      selectedClass: null,
      classSelected: false
    };
  },
  methods: {
    selectClass(characterClass) {
      this.classSelected = true;
      this.selectedClass = characterClass;
    }
  }
};
</script>
