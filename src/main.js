import Vue from 'vue'
import routes from './routes'
import store from './store/store'

const app = new Vue({
  el: '#app',
  store,
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
