import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from 'firebase/app'


Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyA5QVwx3JIow__kq8sEwU7ieJoqAyEPmRo",
  authDomain: "family-tasks-36117.firebaseapp.com",
  databaseURL: "https://family-tasks-36117.firebaseio.com",
  projectId: "family-tasks-36117",
  storageBucket: "family-tasks-36117.appspot.com",
  messagingSenderId: "343853697125",
  appId: "1:343853697125:web:1b54264a85bf0647e71e8c",
  measurementId: "G-C9B69M4PPF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();





new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
