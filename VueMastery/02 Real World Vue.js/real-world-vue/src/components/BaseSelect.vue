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
export default {
  // disable root div inheritAttrs
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    value: [String, Number]
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style scoped>
</style>
