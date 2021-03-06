import App from './App.vue'
import init from 'common/base'
import store from './store'
import router from './router'

init({
    store,
    router,
    render: h => h(App)
})
