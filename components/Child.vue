<script setup>
import { reactive, computed } from "vue";

defineProps({
     greetingMessage: String,
});

const author = reactive({
     name: "John Doe",
     books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
     ],
});
// a computed ref
const publishedBooksMessage = computed(() => {
     return author.books.length > 0 ? "Yes" : "No";
});
</script>

<template>
     <h2>Child component</h2>
     <span>{{ greetingMessage }}</span>

     <p>{{ publishedBooksMessage }}</p>

     <button @click="$emit('someEvent')">click me</button>
</template>
