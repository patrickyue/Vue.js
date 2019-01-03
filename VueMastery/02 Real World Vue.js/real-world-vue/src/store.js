import Vue from "vue";
import Vuex from "vuex";
import EventService from "@/service/EventService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "abc123", name: "Adam Jahr" },
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community"
    ],
    events: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit("ADD_EVENT", event);
      });
    }
  },
  getters: {
    catLength: state => {
      return state.categories.length;
    },
    // doneTodos: state => {
    //   return state.todos.filter(todo => todo.done);
    // },
    // activeTodosCount: state => {
    //   return state.todos.filter(todo => !todo.done).length;
    // },
    getEventById: state => id => {
      return state.events.find(event => event.id === id);
    }
  }
});
