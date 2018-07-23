import Vue from 'vue'
import Vuex from 'vuex'
import routes from './routes'

Vue.use(Vuex)

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
    items: []
  },
  computed: {
    ViewComponent() {
      let matchingView = routes[this.currentRoute];
      !matchingView ? this.currentRoute.toString().search('/details/') == 0 ? matchingView = 'Details' : '404' : false ;
      console.log('./pages/' + matchingView + '.vue');
      
      return require('./pages/' + matchingView + '.vue');
    }
  },
  render(h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
