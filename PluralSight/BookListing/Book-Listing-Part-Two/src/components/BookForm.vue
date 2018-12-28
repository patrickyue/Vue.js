<template>
  <form v-on:submit.prevent="bookSubmit(bookData)" class="" action="#" method="post">
    <input v-model="bookData.bookTitle" type="text" name="title" value="" placeholder="Book Title">
    <input v-model="bookData.bookAuthor" type="text" name="author" value="" placeholder="Book Author">
    <div>
      <input type="checkbox" v-model="bookData.finishedReading"/>
      <label for="finishedReading">Finished Reading</label>
    </div>
    <div>
      <input type="radio" v-model="bookData.ownership" value="borrowed"/>
      <label for="borrowed">borrowed</label>
    </div>
    <div>
      <input type="radio" v-model="bookData.ownership" value="bought"/>
      <label for="bought">bought</label>
    </div>
    <button type="submit" name="button">Add Book</button>
  </form>
</template>

<script>
export default {
  name: "BookForm",
  props: ["books"],
  data() {
    return {
      bookTitle: "",
      bookAuthor: "",
      bookData: {
        bookTitle: "",
        bookAuthor: "",
        finishedReading: false,
        ownership: []
      }
    };
  },
  methods: {
    bookSubmit(bookData) {
      this.$emit("addBook", bookData);
    }
  }
};
</script>

<style>
</style>
