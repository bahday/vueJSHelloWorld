<template>
  <main-layout>
    <div class="col-md-12 text-center pb-5">
      <h2>Semi Finalists 2018</h2>
    </div>
    <teams-item v-for="item of items" v-bind:team="item"></teams-item>
  </main-layout>
</template>

<script>
  import MainLayout from "../layouts/Main.vue"
  import TeamsItem from "../components/TeamsItem.vue"
  import DataService from '../services/DataService'
  
  export default {
    components: {
      MainLayout,
      TeamsItem
    },
    data : function(){
      return {
        items : DataService.getTeams()
      }
    }
  };
</script>
