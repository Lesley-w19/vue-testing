<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <TestOne msg="Vue Testing implemetation.." />
    <HelloWorld msg="Hello World" />
    <Hello content="Hello World" />
  </div>
</template>

<script>
import TestOne from "./components/TestOne.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Hello from "./components/Hello.vue";

export default {
  name: "App",
  components: {
    TestOne,
    HelloWorld,
    Hello,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
