import { defineStore } from "pinia";
export const useStoreNote = defineStore("storeNote", {
  state: () => {
    return {
      notes: [
        {
          id: "1",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitismollitia minus consectetur perferendis quis inventore ut corporis eaquerepellendus reiciendis?",
        },
        {
          id: "2",
          content: "That is a short note , wow",
        },
      ],
    };
  },
  //   getters: {
  //     doubleCount: (state) => state.count * 2,
  //   },
  actions: {
    addnewNote(newNoteContent) {
      const currentDate = new Date().getTime(),
        id = currentDate.toString();
      const note = {
        id,
        content: newNoteContent,
      };
      this.notes.unshift(note);
    },
    delete(itToNote) {
      this.notes = this.notes.filter((note) => {
        return note.id !== itToNote;
      });
    },
  },
});
