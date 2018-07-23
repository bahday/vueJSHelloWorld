<template>
  <div class="container d-flex">
     <div class="row center-row align-self-center justify-content-center p-2">
        <slot></slot>
    </div>
  </div>
</template>

<script>
  import VLink from '../components/VLink.vue'

  export default {
    components: {
      VLink
    }
  }
</script>

<style scoped>
  .container {
    height: 100vh;
    position: relative;
  }
</style>
