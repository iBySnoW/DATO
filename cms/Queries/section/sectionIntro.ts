export default gql`
     query SectionIntro {
          sectionIntro {
               id
               picture {
                    alt
                    url
               }
               description
          }
          header {
               title
          }
     }
`;
