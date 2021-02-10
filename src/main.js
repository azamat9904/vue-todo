import { createApp } from 'vue'
import App from './App.vue'
import router from './libs/router';
import store from './vuex/store';

const app = createApp(App);

app.directive('outsideClickClose', {
    bind() {
        // document.body.addEventListener('click', function (e) {

        // });
    }
});

app.use(router)
    .use(store)
    .mount('#app');


