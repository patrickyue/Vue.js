<template>
  <div>
    <h1>{{fullmsg}}</h1>
    <router-link to="/">Hello</router-link>
    <MyCheckbox :title="checkbox.title" v-model="checkbox.cehcked"/>
    <button @click="sumUp">Count {{count.acum}}</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import MyCheckbox from "./MyCheckbox.vue";

@Component({
  components: {
    MyCheckbox
  }
})
export default class HelloTS extends Vue {
  checkbox = {
    title: "Fancy checkbox",
    value: "checkbox-id",
    checked: true
  };

  count: any = {
    acum: 0
  };

  @Prop({ type: String, default: "Vue" }) msg: String;

  @Watch("count", { deep: true })
  watchCount(newVal) {
    console.log("New: ", newVal.acum);
  }

  get fullmsg() {
    return this.msg;
  }
  created() {
    console.log("Hello TS created");
  }

  sumUp() {
    this.count.acum++;
  }
}
</script>

<style scoped>
</style>
