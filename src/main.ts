import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)

app.use(router)

library.add(fas)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
