<template>
  <div>
    <label v-if="label">{{label}}</label>
    <input :value="value" @input="updateValue" v-bind="$attrs" v-on="listeners">
  </div>
</template>

<script>
import { formFieldMixins } from "../mixins/formFieldMixins.js";
export default {
  mixins: [formFieldMixins],
  props: {
    label: {
      type: String,
      default: ""
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      };
    }
  }
};
</script>
