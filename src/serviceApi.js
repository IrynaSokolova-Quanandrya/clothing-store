import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";

  const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
  });
  // const client = ...
  


 async function fetchAllCategories(){
   const result = await client
    .query({
      query: gql`
        query GetAllCategories {          
            categories{
             name
           }
        }
      `
    })
    const categories = await result.data.categories
    // console.log(categories);
  }
  async function fetchAllData(){
    const result = await client
     .query({
       query: gql`
         query GetAllCategories {          
          categories{
            name,
            products{
              id,
              name,
              inStock,
              gallery,
              description,
              category,
              attributes{
                id,
                name,
                type,
                items{
                  displayValue,
                  value,
                  id
                }
              }
              prices{
                currency{
                  label,
                  symbol
                }
                amount
              }
              brand
            }
          }
         }
       `
     })
     const categories = await result.data.categories
    //  console.log(result);
   }

   async function fetchDataForCard(){
    const result = await client
     .query({
       query: gql`
         query GetAllCategories {          
          categories{
            name,
            products{
              id,             
              gallery,            
              category,              
              prices{
                currency{
                  label,
                  symbol
                }
                amount
              }
              brand
            }
          }
         }
       `
     })
     const categories = await result.data.categories
    //  console.log(categories);
   }

   const api = {
    fetchAllCategories,
    fetchAllData,
    fetchDataForCard,
  }
export default api 