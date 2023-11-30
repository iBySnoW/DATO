export default gql`
     query SingleArticle($slug: String!) {
          article(filter: { blogSlug: { eq : $slug } }) {
               blogSlug
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
          }
     }
`;
