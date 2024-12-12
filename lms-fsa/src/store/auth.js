export default {
  namespaced: true,
  state: {
    isAuthenticated: false,
    user: null,
  },
  mutations: {
    login(state, user) {
      state.isAuthenticated = true;
      state.user = user;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  actions: {
    login({ commit }, user) {
      // Simula autenticação (futuro: conectar com API ou backend)
      commit('login', user);
    },
    logout({ commit }) {
      commit('logout');
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    getUser: (state) => state.user,
  },
};
