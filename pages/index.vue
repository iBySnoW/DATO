<script setup>
import { onMounted } from "vue";

import SectionIntro from "@/cms/Queries/section/sectionIntro";
import SectionList from "~/cms/Queries/section/sectionList";
import SectionCategorie from "~/cms/Queries/section/sectionCategorie";

onMounted(() => {
     if (process.client) {
          import("jarallax").then(({ jarallax }) => {
               jarallax(document.querySelectorAll(".jarallax"), {
                    speed: 0.2,
                    videoSrc: "https://www.youtube.com/watch?v=ab0TSkLe-E0",
               });
          });
     }
});

// SECTION INTRO

const {
     data: sectionIntro,
     introPending,
     introError,
} = await useLazyAsyncQuery(SectionIntro);
const sectionIntroData = ref(sectionIntro.value);

// SECTION LIST

const {
     data: sectionList,
     listPending,
     listError,
} = await useLazyAsyncQuery(SectionList);

const sectionListData = ref(sectionList.value);

// SECTION CATEGORIE
const {
     data: sectionCategorie,
     categoriePending,
     categorieError,
} = await useLazyAsyncQuery(SectionCategorie);

const sectionCategorieData = ref(sectionCategorie.value);
</script>

<template>
     <div>
          <section v-if="sectionIntroData && !introPending">
               <div id="SectionIntro" class="first">
                    <img
                         class=""
                         :src="sectionIntroData.sectionIntro.picture.url"
                         :alt="sectionIntroData.sectionIntro.picture.alt"
                    />
               </div>

               <p>
                    {{ sectionIntroData.sectionIntro.description }}
               </p>
          </section>

          <section v-if="sectionListData && !listPending">
               <div
                    id="SectionList"
                    class="second jarallax"
               >
                    <img
                         class="jarallax-img"
                         :src="sectionListData.sectionList.parallaxPicture.url"
                         :alt="sectionListData.sectionList.parallaxPicture.url"
                    />
               </div>

               <div class="SectionListContent">
                    <div
                         class="cards"
                         v-for="article in sectionListData.sectionList.articles"
                         :key="article.id"
                    >
                         <img
                              class="article_img"
                              :src="article.image.url"
                              :alt="article.image.alt"
                         />
                         <h3>{{ article.title }}</h3>
                         <p>{{ article.content }}</p>

                         <!-- <a :href="`article/${article.blogSlug}`">Détails</a> -->
                    </div>
               </div>
          </section>

          <section class="sectionCategorie" v-if="sectionCategorieData && !categoriePending">
               <h2>{{ sectionCategorieData.sectionCategorie.title }}</h2>

               <div class="categories">
                    <div
                         class="categorieLink"
                         v-for="categorie in sectionCategorieData
                              .sectionCategorie.categorie"
                    >
                         <!-- <a :href="`article/category/${categorie.slug}`">{{
                              categorie.name
                         }}</a> -->
                    </div>
               </div>
          </section>
     </div>
</template>

<style scoped>
.jarallax {
     position: relative;
     z-index: 0;
}

.jarallax > .jarallax-img {
     position: absolute;
     object-fit: cover;
     font-family: "object-fit: cover;";
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     z-index: -1;
}

.first {
     height: 550px;
}
.second {
     height: 400px;
}
.image {
     width: 100%;
     height: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
}

.SectionListContent {
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

.sectionCategorie {
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
}

.categories {
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     justify-content: center;
     align-items: center;
     gap: 2rem;
}

.categorieLink {
     background-color: white;
     color: black;
     border-radius: 10px;
     padding: 1rem;
}
</style>
