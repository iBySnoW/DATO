export default gql`
     query SectionCategorie {
          sectionCategorie {
               title
               categorie {
                    name
                    slug
               }
          }
     }
`;
