import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from '../views/About.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import firebase from 'firebase/app'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {requiresAuth: true}
  },
  {
  path: "/register",
  name: "Register",
  component: Register
  },
  {
    path: "/login",
    name: "Login",
    component: Login
    }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next)=>{
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if(requiresAuth && !isAuthenticated){
    next('/login'); 
  } else {
    next()
  }
})

export default router;
