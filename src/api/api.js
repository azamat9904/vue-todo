import axios from '../libs/axios';

export const Api = {

    getItems: () => {
        return axios.get('/items?_expand=color').then((response) => response.data);
    },
    getTodo: (id) => {
        return axios.get('/todos/' + id).then((response) => response.data);
    },
    getColors: () => {
        return axios.get('/colors').then((response) => response.data);
    },
    removeItem: (id) => {
        return axios.delete('/items/' + id).then((response) => response.data);
    }
}