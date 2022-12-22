
import App from './App.vue'
import router from './router'
import { createApp, h } from 'vue'


import './assets/css/style.css'

const app = createApp({
    render: () => h(App)
});

app.use(router)
app.mount('#app')
