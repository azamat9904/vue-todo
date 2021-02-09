import axios from '../libs/axios';

export const Api = {

    getItems: () => {
        return axios.get('/items').then((response) => response.data);
    },
    getTodo: (id) => {
        return axios.get('/todos/' + id).then((response) => response.data);
    }
}