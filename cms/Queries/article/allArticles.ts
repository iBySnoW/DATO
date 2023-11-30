export default gql`
     query AllArticles {
          allArticles {
               content
               id
               blogSlug
               image {
                    alt
                    url
               }
               title
               categorie {
                    id
                    name
                    slug
                    seoMeta {
                         title
                         description
                    }
               }
          }
     }
`;
