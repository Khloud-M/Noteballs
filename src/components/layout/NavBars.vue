<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">Noteballs</div>
        <a
          @click.prevent="showMobil = !showMobil"
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': showMobil }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobil }"
      >
        <div class="navbar-end">
          <router-link class="navbar-item" active-class="is-active" to="/">
            Notes
          </router-link>
          <router-link class="navbar-item" active-class="is-active" to="/stats">
            Stats
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
// import
import { ref } from "vue";
// mobile nav
const showMobil = ref(false);
</script>
<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>