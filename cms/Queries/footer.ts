export default gql`
     query Footer {
          footer {
               social {
                    id
                    name
                    url
                    icon {
                         url
                    }
               }
          }
     }
`;
