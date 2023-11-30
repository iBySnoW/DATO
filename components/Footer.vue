<!-- <script setup>

import Footer from "@/cms/Queries/footer"

const {data, pending, error} = await useLazyAsyncQuery(Footer);

</script>

<template>
<div class="footer" v-if="data.footer && !pending">
    <div class="social_block">
        <a v-for="social in data.footer.social" :key="social.id" :href="social.url"><img class="social_icon" :src="social.icon.url" :alt="social.name"></a>
    </div>
</div> 


</template>

<style scoped>

.footer {
    background-color: white;
    color: black;
}

.social_block {
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: center;
     padding: 10px;
     margin: 10px;
     width: fit-content;
    }

    .social_icon {
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     padding: 10px;
     margin: 10px;
     width: 50px;
    }
</style> -->