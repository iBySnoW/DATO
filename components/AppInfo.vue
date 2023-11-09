<script setup>
// SSR
const { data, pending, error, refresh } = await useFetch(
     "https://api.nuxtjs.dev/mountains"
);
</script>

<template>
     <span>
          <slot />

          <Child
               greeting-message="hello from child call in AppInfo"
               @some-event="callback"
          />
     </span>

     <div class="cards" v-for="(item, index) in data" :key="index">
          <img :src="item.image" alt="mountain" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
     </div>
</template>

<style scoped>

.cards {
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     border: 1px solid #ccc;
     border-radius: 5px;
     padding: 10px;
     margin: 10px;
     width: 300px;
    }

img {
     width: 300px;
}
</style>
