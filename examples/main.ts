import { createApp } from 'vue';
import App from './app.vue';
import LsButton from 'seven-bit-ui';

const app = createApp(App);
app.use(LsButton as any);

app.mount('#app');
