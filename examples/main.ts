import { createApp } from 'vue';
import App from './app.vue';
import sbui from 'seven-bit-ui';
console.log(sbui);

const app = createApp(App);
app.use(sbui);
app.mount('#app');
