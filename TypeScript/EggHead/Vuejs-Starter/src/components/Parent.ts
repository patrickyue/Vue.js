import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Parent extends Vue {
  message: String = "Hello from Parent";
  created() {
    console.log("Parent created");
  }
  parentClicked() {
    console.log("Parent Clicked");
  }
}
