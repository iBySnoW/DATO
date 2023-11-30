<script setup>
import SingleArticle from "~/cms/Queries/article/singleArticle";
const route = useRoute();
const {
     data: articleQuery,
     pending,
     error,
} = await useLazyAsyncQuery(SingleArticle, { slug: route.params.slug });
</script>

<template>
     <header v-if="articleQuery.article.seoMetadata">
          <head>
               <meta charset="utf-8" />
               <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
               />
               <title>{{ articleQuery.article.seoMetadata.title }}</title>
               <meta
                    name="description"
                    :content="articleQuery.article.seoMetadata.description"
               />
          </head>
     </header>
     <div class="article" v-if="!pending">
          <h3>{{ articleQuery.article.title }}</h3>

          <img
               class="article_img"
               :src="articleQuery.article.image.url"
               :alt="articleQuery.article.image.alt"
          />

          <p>{{ articleQuery.article.content }}</p>
     </div>
</template>

<style scoped>
.article {
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

.article_img {
     width: 300px;
}
</style>
