<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { createDecorator } from "vue-class-component";

const Log = (msg?: string) => {
  return createDecorator((component, key) => {
    console.log("msg: ", msg);
    console.log("Key: ", key);
  });
};

const NoCache = createDecorator((comp: any, key) => {
  comp.computed[key].cache = false;
});
import axios from "axios";

@Component({})
export default class App extends Vue {
  @Provide("PPP") http = axios;
  @Log("yoooo")
  name = "paco";

  @Log()
  @NoCache
  get message() {
    return "Hi";
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
