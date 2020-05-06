<template>
  <choice-box>
    <choice-box-item>
      <router-link to="/game">Wake up...</router-link>
    </choice-box-item>
  </choice-box>
</template>

<script>
export default {
  name: "Start"
};
</script>

<style scoped lang="scss">
.center {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
