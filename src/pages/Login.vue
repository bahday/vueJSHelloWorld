<template>
  <main-layout>
    <div class="d-none d-md-block col-md-8 m-auto">
      <img class="img-wc align-self-center" src="https://i1.wp.com/www.techweez.com/wp-content/uploads/2014/06/Fifa-World-Cup-Brazil-2014.jpg?fit=2695%2C1516" />
    </div>
    <div class="col-xs-12 d-flex col-md-4 text-center">
      <div class="col-md-12 col-xs-12 m-auto">
        <h2 class="pb-5"> Semi Finalists 2018 </h2>
        <form v-on:submit.prevent="onSubmit">
          <div class="form-group pb-2">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group pb-2">
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary  float-right" >Login</button>
        </form>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import AuthService from "../services/AuthService";
import Router from "../router";
export default {
  components: {
    MainLayout
  },
  methods: {
    onSubmit() {
      window.location = "http://" + window.location.host + "/home";
    },
  }
};
</script>

<style scoped>
.center-row {
  background: #ffffff7a;
  border-radius: 2%;
}
</style>