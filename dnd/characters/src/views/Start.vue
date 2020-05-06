<template>
  <div class="choice-menu center-menu">
    <router-link to="/new" class="choice-item">New character...</router-link>
  </div>
</template>
<script>
export default {
  name: "Start"
};
</script>
<style scoped lang="scss">
.center-menu {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
