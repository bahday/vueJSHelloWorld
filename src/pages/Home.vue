<template>
  <main-layout>
    <div class="col-md-12 text-center pb-5">
      <h2>Semi Finalists 2018</h2>
    </div>
    <teams-item v-for="(item,index) of teams" :key="index" v-bind:team="item"></teams-item>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import TeamsItem from "../components/TeamsItem.vue";

export default {
  components: {
    MainLayout,
    TeamsItem
  },
  computed: {
    teams() {
      return this.$store.getters.getTeams;
    }
  }
};
</script>
