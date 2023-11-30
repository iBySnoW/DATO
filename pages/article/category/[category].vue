<script setup>
import AllArticles from "~/cms/Queries/article/allArticles";

const route = useRoute();

const { data, pending, error } = await useLazyAsyncQuery(AllArticles);

let articleFiltered;

articleFiltered = computed(() => {
     if (data._rawValue && data._rawValue.allArticles) {
          return data._rawValue.allArticles.filter(
               (article) => article.categorie.slug === route.params.category
          );
     }
     return [];
});

</script>

<template>
     <h1>Catégorie - {{ route.params.category }}</h1>

     <div class="listArticle" v-if="!pending">
          <div
               class="cards"
               v-for="article in articleFiltered"
               :key="article.id"
          >
               <img
                    class="article_img"
                    :src="article.image.url"
                    :alt="article.image.alt"
               />
               <h3>{{ article.title }}</h3>
               <p>{{ article.content }}</p>

               <a :href="`/article/${article.blogSlug}`">Détails</a>
          </div>
     </div>
</template>

<style scoped>
.listArticle {
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     justify-content: center;
     align-items: center;
}

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

.article_img {
     width: 300px;
}
</style>
