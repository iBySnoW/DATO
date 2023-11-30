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
