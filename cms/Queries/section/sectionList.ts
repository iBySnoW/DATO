export default gql`
     query SectionList {
          sectionList {
               id
               articles {
                    blogSlug
                    content
                    title
                    id
                    image {
                         url
                         alt
                    }
               }
               parallaxPicture {
                    alt
                    url
               }
          }
     }
`;
