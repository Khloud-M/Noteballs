<template>
  <div class="container has-background-success-dark p-4 mb-5">
    <div class="field">
      <div class="control">
        <textarea
          class="textarea"
          placeholder="add new note"
          v-model="newNote"
          ref="newNoteRef"
        />
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <button
          class="button is-link is-success"
          :disabled="!newNote"
          @click="addnewNote"
        >
          Add new note
        </button>
      </div>
    </div>
  </div>
  <Note
    v-for="note in notes"
    :key="note.id"
    :note="note"
    @deleteClick="deleteNote"
  />
</template>
<script setup>
// import
import { ref } from "vue";
import Note from "@/components/notes/Note.vue";
// data
const newNote = ref("");
const newNoteRef = ref(null);

const notes = ref([
  {
    id: "1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitismollitia minus consectetur perferendis quis inventore ut corporis eaquerepellendus reiciendis?",
  },
  {
    id: "2",
    content: "That is a short note , wow",
  },
]);
// method
const addnewNote = () => {
  const currentDate = new Date().getTime(),
    id = currentDate.toString();
  const note = {
    id,
    content: newNote.value,
  };
  notes.value.unshift(note);
  newNote.value = "";
  newNoteRef.value.focus();
};
// deleteNote
const deleteNote = (idNote) => {
  notes.value = notes.value.filter((note) => {
    return note.id !== idNote;
  });
};
</script>