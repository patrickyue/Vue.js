import EventService from "@/service/EventService.js";

export default {
  namespaced: true,
  state: {
    events: [],
    event: {},
    pages: 0,
    perPage: 3
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
    createEvent({ commit, rootState, dispatch }, event) {
      console.log(rootState.user.user.name);
      //dispatch('moduleName/actionToCall', null, {root: true}) , null is payload, root means go to this.$store to search
      return EventService.postEvent(event)
        .then(() => {
          commit("ADD_EVENT", event);
          const notification = {
            type: "success",
            message: "Event has been created!"
          };
          dispatch("notification/add", notification, { root: true });
        })
        .catch(error => {
          const notification = {
            type: "error",
            message: "Failed to create the event: " + error.message
          };
          dispatch("notification/add", notification, { root: true });
          throw error;
        });
    },
    fetchEvents({ commit, dispatch, state }, { page }) {
      return EventService.getEvents(state.perPage, page)
        .then(response => {
          commit("SET_TOTAL_PAGES", response.headers["x-total-count"]);
          commit("SET_EVENTS", response.data);
        })
        .catch(error => {
          const notification = {
            type: "error",
            message: "There was a problem fetching event: " + error.message
          };
          dispatch("notification/add", notification, { root: true });
        });
    },
    fetchEvent({ commit, getters }, id) {
      var event = getters.getEventById(id);
      if (event) {
        commit("SET_EVENT", event);
        return event;
      } else {
        return EventService.getEvent(id).then(response => {
          commit("SET_EVENT", response.data);
          return response.data;
        });
        // .catch(error => {
        //   const notification = {
        //     type: "error",
        //     message: "There was a problem fetching event: " + error.message
        //   };
        //   dispatch("notification/add", notification, { root: true });
        // });
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
