<template>
  <div>
    <choice-box v-if="!classSelected">
      Pick a character!
      <choice-box-item>
        <a @click="selectClass('Druid')" class="choice-item">Druid</a>
      </choice-box-item>
      <choice-box-item>
        <a @click="selectClass('Wizard')" class="choice-item">Wizard</a>
      </choice-box-item>
    </choice-box>
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
