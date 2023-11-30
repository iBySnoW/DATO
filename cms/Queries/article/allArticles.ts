export default gql`
     query AllArticles {
          allArticles {
               content
               id
               image {
                    alt
                    url
               }
               title
               seoMetadata {
                    description
                    title
                    twitterCard
               }
               categorie {
                    id
                    name
                    slug
               }
          }
     }
`;
