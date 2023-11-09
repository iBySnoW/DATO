export default gql`
     query Articles {
        article {
            id
            content
            blogSlug
            title
            image {
               filename
               id
               alt
               basename
               url
             }
          }
          
     }
`;
