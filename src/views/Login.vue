<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="pressed">
      <input v-model="email" />
      <input v-model="password" />
      <button>Login</button>
    </form>
    <p v-if='user'>{{user.user.email}}</p>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      user: null
    };
  },
  methods: {
    async pressed() {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password);
      this.$router.replace('/');
      this.user = user
    }
  }
};
</script>

<style lang="css">
</style>