<template>
  <div>
    <h1>Create an Event, {{user.name}}</h1>
    <h1>Event By {{user.id}}</h1>
    <p>There are {{catLength}} categories</p>
    <p>{{ getEventById(2) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    catLength() {
      return this.$store.getters.catLength;
    },
    ...mapState(["user", "categories"]),
    ...mapGetters(["getEventById"])
  }
};
</script>
