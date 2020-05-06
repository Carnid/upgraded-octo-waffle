<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

#app {
  font-family: "Press Start 2P", "Courier New", Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #c8d0d8;
  height: 100vh;
  width: 100vw;
}

body {
  background-color: black;
  margin: 0;
}

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  &:visited,
  &:active,
  &:hover {
    color: inherit;
  }
}

.choice-menu {
  width: 100%;
  height: min-content;
  min-width: max-content;
  text-align: center;
  font-size: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex;
}

.choice-item {
  font-size: 120%;
  transition: font-size 200ms;
  &:hover {
    font-size: 100%;
  }
}
</style>
