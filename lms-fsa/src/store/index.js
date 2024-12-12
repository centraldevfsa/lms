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
      commit("SET_USER", userData);
      localStorage.setItem("user", JSON.stringify(userData));
    },
    autoLogin({ commit }) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        commit("SET_USER", user);
      }
    },
  },
  
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    user: (state) => state.user,
    userRole: (state) => state.user?.role,
  },
});
