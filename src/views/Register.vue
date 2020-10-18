<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="pressed">
      <input v-model="email" />
      <input v-model="password" />
      <button>Register</button>
    </form>
    <p v-if="user">{{user.user.email}}</p>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  name: 'Register',
  data() {
    return {
      email: "",
      password: "",
      user: null
    };
  },
  methods: {
    async pressed() {
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        //if register is successful send them to secret page
        this.user = user
         this.$router.replace('/');
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style lang="css">
</style>