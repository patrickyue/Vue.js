import EventService from "@/service/EventService.js";

export default {
  namespaced: true,
  state: {
    events: [],
    event: {},
    pages: 0
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
    SET_TOTAL_PAGES(state, pages) {
      state.pages = pages;
    },
    SET_EVENT(state, event) {
      state.event = event;
    }
  },
  actions: {
    createEvent({ commit, rootState }, event) {
      console.log(rootState.user.user.name);
      //dispatch('moduleName/actionToCall', null. {root: true}) , null is payload, root means go to this.$store to search
      return EventService.postEvent(event).then(() => {
        commit("ADD_EVENT", event);
      });
    },
    fetchEvents({ commit }, { perPage, page }) {
      EventService.getEvents(perPage, page)
        .then(response => {
          commit("SET_TOTAL_PAGES", response.headers["x-total-count"]);
          commit("SET_EVENTS", response.data);
        })
        .catch(error => {
          console.log("There was an error", error.response);
        });
    },
    fetchEvent({ commit, getters }, id) {
      var event = getters.getEventById(id);
      if (event) {
        commit("SET_EVENT", event);
      } else {
        EventService.getEvent(id)
          .then(response => {
            commit("SET_EVENT", response.data);
          })
          .catch(error => {
            console.log("There was an error", error.response);
          });
      }
    }
  },
  getters: {
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
};
