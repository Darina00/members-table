import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router/router';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')


const members = [
  {
      id: 1,
      name: "John",
      position: "Engineer"
  },
  {
      id: 2,
      name: "Hanna",
      position: "Manager"
  },
  {
      id: 3,
      name: "Alex",
      position: "Manager"
  },
  {
      id: 4,
      name: "Sam",
      position: "Engineer"
  },
  {
      id: 5,
      name: "Chris",
      position: "Other stuff"
  },
  {
      id: 6,
      name: "Elizabeth",
      position: "Manager"
  },
  {
      id: 7,
      name: "Drake",
      position: "Manager"
  },
  {
      id: 8,
      name: "Mike",
      position: "Engineer"
  },
  {
      id: 9,
      name: "Tom",
      position: "Other stuff"
  },
  {
      id: 10,
      name: "Roman",
      position: "Other stuff"
  }
]

if(!localStorage.getItem('Members')) {
localStorage.setItem('Members', JSON.stringify(members))    
}