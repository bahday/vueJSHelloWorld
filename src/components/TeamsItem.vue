<template>
<div class="col-xs-12 col-md-6 p-5">
    <div class="row mb-3 p-0 item">
    <div class="col-md-12 col-xs-12 p-2 m-0 bg-light border-bottom"><h3>{{ team.country }} </h3></div>
  <div class="col-md-7 col-xs 7 p-2">
     <p>Coach: <strong> {{ team.coach}} </strong> </p>
     <p>Continent: <strong> {{ team.continent }} </strong> </p>
     <a type="submit" class="btn btn-primary" v-bind:href="'../details/'+team.id">Details...</a>
  </div>
  <div class="col-md-5 col-xs-5 m-auto p-2">
      <img class="img-wc" v-bind:src="'http://www.a1flags.com.au/Areas/Catalogue/Public/Images/Flag/'+team.flag+'.svg'"/>
  </div>
   <slot></slot>
  </div>
</div>
</template>

<script>
import routes from "../routes";

export default {
  props: {
    team: {
      type: Object
    }
  },
  computed: {
    isActive() {
      return this.href === this.$root.currentRoute;
    }
  },
  methods: {
    go(event) {
      event.preventDefault();
      this.$root.currentRoute = this.href;
      window.history.pushState(null, routes[this.href], this.href);
    }
  }
};
</script>

