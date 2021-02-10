import { createStore } from 'vuex';
import { Api } from '../api/api';

const store = createStore({
    state: {
        items: [],
        isLoading: false,
        error: null,
        currentTodo: null,
        colors: []
    },
    getters: {
        items: (state) => {
            return state.items;
        },
        currentTodo: (state) => {
            return state.currentTodo;
        },
        colors: (state) => {
            return state.colors;
        }
    },
    mutations: {
        FETCH_ITEM_STARTED: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        FETCH_ITEM_SUCCESS: (state, payload) => {
            state.isLoading = false;
            state.items = payload;
            state.error = null;
        },
        FETCH_ITEM_FAILED: (state, error) => {
            state.isLoading = false;
            state.error = error;
        },
        FETCH_TODO_STARTED: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        FETCH_TODO_SUCCESS: (state, payload) => {
            state.isLoading = false;
            state.currentTodo = payload;
            state.error = null;
        },
        FETCH_TODO_FAILED: (state, error) => {
            state.isLoading = false;
            state.error = error;
        },
        FETCH_COLORS_STARTED: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        FETCH_COLORS_SUCCESS: (state, colors) => {
            state.isLoading = false;
            state.error = null;
            state.colors = colors;
        },
        FETCH_COLORS_FAILED: (state, error) => {
            state.isLoading = false;
            state.error = error;
        },
        REMOVE_ITEM_STARTED: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        REMOVE_ITEM_SUCCESS: (state, i) => {
            state.items = state.items.filter((item) => item.id !== i.id);
            state.isLoading = false;
            state.error = null;
        },
        REMOVE_ITEM_FAILED: (state, error) => {
            state.isLoading = false;
            state.error = error;
        }
    },

    actions: {
        fetchItems: ({ commit }) => {
            commit("FETCH_ITEM_STARTED");
            Api.getItems().then((items) => {
                commit("FETCH_ITEM_SUCCESS", items);
            }).catch((e) => {
                commit("FETCH_ITEM_FAILED", e.response.data);
            })
        },
        fetchTodo: ({ commit }, id) => {
            commit("FETCH_TODO_STARTED");
            Api.getTodo(id).then(() => {
                commit("FETCH_TODO_SUCCESS");
            }).catch(() => {
                commit("FETCH_TODO_FAILED");
            });
        },
        fetchColors: ({ commit }) => {
            commit("FETCH_COLORS_STARTED");
            Api.getColors().then((colors) => {
                commit('FETCH_COLORS_SUCCESS', colors);
            }).catch((e) => {
                commit("FETCH_COLORS_FAILED", e.response.data);
            });
        },
        removeItem: ({ commit }, item) => {
            commit("REMOVE_ITEM_STARTED");
            Api.removeItem(item.id).then(() => {
                commit('REMOVE_ITEM_SUCCESS', item);
            }).catch((e) => {
                commit('REMOVE_ITEM_FAILED', e.response.data);
            });
        }
    }
});

export default store;