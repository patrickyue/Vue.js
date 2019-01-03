<template>
  <div>
    <h1>Events Listing for {{user.user.name}}</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event"/>
    <BaseIcon/>
    <template v-if=" page != 1">
      <router-link :to="{ name: 'event-list', query:{page: page - 1}}" rel="prev">Prev Page</router-link>
      <template v-if="hasNextPage">|</template>
    </template>

    <template v-if="hasNextPage">
      <router-link :to="{ name: 'event-list', query:{page: page + 1}}" rel="prev">Next Page</router-link>
    </template>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    EventCard
  },
  created() {
    (this.perPage = 3),
      this.fetchEvents({
        perPage: this.perPage,
        page: this.page
      });
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    hasNextPage() {
      return this.event.pages > this.page * this.perPage;
    },
    ...mapState(["event", "pages", "user"])
  },
  methods: {
    ...mapActions("event", ["fetchEvents"])
  }
};
</script>
