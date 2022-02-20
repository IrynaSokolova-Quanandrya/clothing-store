import {
    ApolloClient,
    InMemoryCache,
    gql
  } from "@apollo/client";

 export const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
  });
  
 async function fetchProductById(){
   const result = await client
    .query({
      query: gql`
        query fetchProductById($prodId: String!) {          
          product(id: $prodId){      
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
      `
    })
    const product = await result.data.product
    return product;
    // console.log(categories);
  }
  // async function fetchAllData(){
  //   const result = await client
  //    .query({
  //      query: gql`
  //        query GetAllCategories {          
  //         categories{
  //           name,
  //           products{
  //             id,
  //             name,
  //             inStock,
  //             gallery,
  //             description,
  //             category,
  //             attributes{
  //               id,
  //               name,
  //               type,
  //               items{
  //                 displayValue,
  //                 value,
  //                 id
  //               }
  //             }
  //             prices{
  //               currency{
  //                 label,
  //                 symbol
  //               }
  //               amount
  //             }
  //             brand
  //           }
  //         }
  //        }
  //      `
  //    })
  //    const product = await result.data
  //    console.log(product);
  //  }

   async function fetchDataForCard(){
    const result = await client
     .query({
       query: gql`
         query fetchDataForCard {          
          category{
            products{
              id,  
              name,           
              gallery,                  
              prices{
                currency{
                  label,
                  symbol
                }
                amount
              }             
            }
          }
         }
       `
     })
     const products = await result.data.category.products
     return products;
    //  console.log(categories);
   }

   const api = {
    fetchProductById,
    fetchDataForCard,
  }
export default api 