import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSimpleAlert from "vue3-simple-alert";

const app = createApp(App)
app.use(router).mount('#app')
app.use(VueSimpleAlert)