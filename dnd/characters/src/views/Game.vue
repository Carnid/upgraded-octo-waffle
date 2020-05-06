<template>
  <choice-box>
    <choice-box-item><a @click="attack">Attack</a></choice-box-item>
  </choice-box>
</template>
<script>
import d20 from '@/dices/d20'
export default {
  name: "new-character",
  methods: {
    attack () {
      alert(d20.roll())
    }
  }
};
</script>
