<template>
  <navBar />
  <div class="container is-max-desktop px-2 py-4">
    <RouterView></RouterView>
  </div>
</template>
<script setup>
// import
import navBar from "@/components/layout/NavBars.vue";
</script>
<style>
@import "bulma/css/bulma.min.css";
</style>