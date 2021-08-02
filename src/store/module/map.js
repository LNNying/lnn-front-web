export default {
    namespaced: true,
    state: {
        layout: 'LayoutVertical',
    },
    mutations: {
        updateLayout(state, payload) {
            state.layout = payload;
        }
    },
    actions: {
        updateLayout({commit}, layout) {
            commit('updateLayout', layout);
        }
    },
    getters: {}
}
