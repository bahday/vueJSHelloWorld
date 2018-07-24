<template>
  <main-layout>
    <div v-if="!team">Team not Found :(</div>
    <div v-if="team" class="row mb-3 p-0">
      <div class="col-md-12 col-xs-12 pb-5 m-0 text-center">
        <h3>{{ team.country }} </h3>
      </div>
      <div class="col-md-8 com-xs-12">
        <img class="img-wc" v-bind:src="team.img" />
        <h4> Some information </h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div class="col-md-4 com-xs-12 player-list">
        <div class="item p-2 mb-1" v-for="(player,index) of team.players" :key="index">
          {{ player.name +'('+player.position + ')'}}
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from "../layouts/Main.vue";
  
  export default {
    components: {
      MainLayout
    },
    computed: {
      team() {
        return this.$store.getters.getTeamById(window.location.pathname.split("/").pop());
      }
    }
  };
</script>
