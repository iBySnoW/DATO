<script setup>
    import { ref } from "vue";
    import { useCounterStore } from "@/store/counter";
    import { storeToRefs } from "pinia";
    const inputVal = ref("");
    const counterStore = useCounterStore();
    const { increment } = counterStore;
    const { count } = storeToRefs(counterStore);

    const tab = ref(["a", "b", "c"]);
</script>

<template>
     <h2>Store pinia</h2>
     <button @click="increment">increment</button>
     <p>{{ count }}</p>

     <div>
          <ul>
               <li v-for="(item, index) in tab" :key="index">
                    {{ item }}
               </li>
          </ul>
     </div>
</template>

<style scoped>
.image img {
     width: 100px;
}
</style>
