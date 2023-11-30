export default gql`
     query Header {
          header {
               id
               title
               navBlock {
                    id
                    label
                    link
               }
               logo {
                    url
                    alt
               }
          }
     }
`;
