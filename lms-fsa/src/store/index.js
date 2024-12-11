import { createStore } from "vuex";

export default createStore({
  state: {
    user: null, // Armazena os dados do usuário logado
    isAuthenticated: false, // Indica se o usuário está autenticado
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
      state.isAuthenticated = !!user; // Define se está autenticado
    },
    LOGOUT(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  actions: {
    login({ commit }, userData) {
      // Simula um login (substitua pelo back-end futuramente)
      commit("SET_USER", userData);
      localStorage.setItem("user", JSON.stringify(userData));
    },
    logout({ commit }) {
      commit("LOGOUT");
      localStorage.removeItem("user");
    },
    autoLogin({ commit }) {
      const user = localStorage.getItem("user");
      if (user) {
        commit("SET_USER", JSON.parse(user));
      }
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    user: (state) => state.user,
  },
});
