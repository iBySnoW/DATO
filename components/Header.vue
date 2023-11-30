<script setup>

import Header from "@/cms/Queries/header"

const {data:header} = await useLazyAsyncQuery(Header);

const navBlocks = ref(header.value.header.navBlock);
const logo = ref(header.value.header.logo);
const title  = ref(header.value.header.title);
</script>

<template>

<div class="header">
    <img class="logo" :src="logo.url" :alt="logo.alt">
    <h1>{{ title }}</h1>
    <nav>
        <ul>
            <li v-for="navBlock in navBlocks" :key="navBlock.id">
                <a :href="navBlock.link">{{ navBlock.label }}</a>
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