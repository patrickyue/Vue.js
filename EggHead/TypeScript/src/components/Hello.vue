<template>
  <div class="hello">
    <h1 v-colorDirective="{color:'white', background:'green'}">{{ message }}</h1>
    <router-link to="/hello-ts">Hello TS</router-link>
    <button @click="clicked">Click</button>
    <button @click="parentClicked">Parent Click</button>
    <HelloTS msg="Test"/>
    <br>

    <router-link to="/users">Users</router-link>
  </div>
</template>

<script lang="ts">
import HelloTS from "./HelloTS.vue";
import Parent from "./Parent";

import Component from "vue-class-component";
import colorDirective from "../color-directive";

@Component({
  directives: {
    colorDirective
  },
  components: {
    HelloTS
  }
})
export default class Hello extends Parent {
  message: String = "Hello from Child";

  get fullMessage() {
    return `${this.message} from Typescript`;
  }

  created() {
    console.log("Hello created");
  }

  beforeRouteEnter(to, from, next) {
    console.log("Hello Enter ");
    next();
  }
  clicked() {
    console.log("clicked");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
