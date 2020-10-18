<template>
  <div id="app">
    <div id="nav">
      <p v-if="user">{{user.email}}</p>
      <router-link to="/">Home</router-link>|
      <router-link v-if='user' to="/about">About</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
      <button @click="signOut">Sign Out</button>
    </div>
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "App",
  data() {
    return {
      loggedIn: false,
      user: null
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.loggedIn = true;
        this.user = user;
      } else {
        this.loggedIn = false;
        this.user = null;
      }
    });
  },
  methods: {
    async signOut() {
      await firebase.auth().signOut();
      this.$router.replace("/login");
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
