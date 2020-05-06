<template>
  <div class="center-screen">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "center-screen"
};
</script>

<style scoped lang="scss">
.center-screen {
  width: 90vw;
  height: 95vh;
  margin: 2.5vh 5vw;
  border: solid white 1px;
  overflow: hidden;
}
</style>
