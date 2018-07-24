<template>

  <div class="container d-flex">
     <div class="row center-row align-self-center justify-content-center p-2">
        <slot></slot>
    </div>
  </div>
</template>

<script>

  export default {
    components: {
    }
  }
</script>

<style scoped>
  .container {
    height: 100vh;
    position: relative;
  }
</style>
