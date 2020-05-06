<template>
  <div class="choice-box">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "choice-box"
};
</script>
<style scoped lang="scss">
.choice-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 4rem;
}
</style>
