<template>
    <div class="choice-box-item">
        <div class="inner">  
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
  name: "choice-box-item"
};
</script>
<style scoped lang="scss">
@import "@/style/variables.scss";

.choice-box-item {
  padding:0.75rem;
  font-size: 10vh;
  transition: font-size 10ms;
  height: 10vh;
  &:hover {
    font-size: 9vh;
  }
}
</style>
