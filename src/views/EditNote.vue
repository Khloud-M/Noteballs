<template>
  <h1>Edit Note</h1>
  <AddEditNote>
    <template #button>
      <button
        class="button is-link is-success"
        :disabled="!newNote"
        @click="addnewNote"
      >
        Edit Note
      </button>
    </template>
  </AddEditNote>
</template>

<script setup>
import AddEditNote from "@/components/notes/AddEditNote.vue";
</script>

<style>
</style>