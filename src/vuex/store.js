import { createStore } from 'vuex';
import { Api } from '../api/api';

const store = createStore({

    state: {
        items: [],
        isLoading: false,
        error: null
    },
    getters: {
        items: (state) => {
            return state.items;
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
        }
    }
});

export default store;