<script setup>

import Articles from "@/cms/Queries/article"

const {data:articles} = await useLazyAsyncQuery(Articles);
</script>


<template>

<div>
    <ul>
        <li v-for="article in articles" :key="articles.id">
           <div class="cards">
                <img :src="article.image.url" :alt="article.image.alt">
                <h3>{{ article.title }}</h3>
                <p>{{ article.content }}</p>
           </div> 
        </li>
    </ul>

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