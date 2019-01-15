<template>
  <div>
    <label v-if="label" for>{{label}}</label>
    <input :value="value" @input="updateValue" v-bind="$attrs">
  </div>
</template>

<script>
export default {
  // disable root div inheritAttrs
  inheritAttrs: false,
  props: {
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
