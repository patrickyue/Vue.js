<template>
  <div>
    <label v-if="label" for>{{label}}</label>
    <select :value="value" @change="updateValue" v-bind="$attrs" v-on="$listeners">
      <!-- v-on="$listeners" for vulidate  -->
      <!-- :selected="option === value" for showing the selected one -->
      <option v-for="option in options" :key="option" :selected="option === value">{{ option }}</option>
    </select>
  </div>
</template>

<script>
import { formFieldMixins } from "../mixins/formFieldMixins.js";
export default {
  mixins: [formFieldMixins],
  props: {
    options: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
</style>
