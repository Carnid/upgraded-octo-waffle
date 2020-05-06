<template>
  <div id="app">
    <center-screen>
      <router-view />
    </center-screen>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
$white: #c8d0d8;

#app {
  font-family: "Press Start 2P", "Courier New", Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $white;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

body {
  background-color: black;
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
</style>
