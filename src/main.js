import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import firebase from 'firebase';

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyBT0MLa8y5Bgsm8rQA-xlXxdoAWhItQFcM",
    authDomain: "project3-7de99.firebaseapp.com",
    databaseURL: "https://project3-7de99.firebaseio.com",
    projectId: "project3-7de99",
    storageBucket: "project3-7de99.appspot.com",
    messagingSenderId: "612800876847",
    appId: "1:612800876847:web:b35a29e09430f5f3"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

firebase.auth().onAuthStateChanged(user => {
  if(user){
    store.commit('setUser',user);
  }
  else {
    store.commit('setUser',null);
  }
});