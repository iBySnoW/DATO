<script setup>
import Header from "@/cms/Queries/header";

const { data, pending, error } = await useLazyAsyncQuery(Header);

</script>

<template>
     <div class="header" v-if="!pending">
          <img
               class="logo"
               :src="data.header.logo.url"
               :alt="data.header.logo.alt"
          />
          <h1>{{ data.header.title }}</h1>
          <nav>
               <ul>
                    <li
                         v-for="navBlock in data.header.navBlock"
                         :key="navBlock.id"
                    >
                         <a href="#">{{ navBlock.label }}</a>
                    </li>
               </ul>
          </nav>
     </div>
</template>

<style scoped>
.header {
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 10px;
     border-bottom: 1px solid #ccc;
     flex-wrap: wrap;
}
.logo {
     width: 100px;
     height: 100px;
     border-radius: 100%;
}
</style>
