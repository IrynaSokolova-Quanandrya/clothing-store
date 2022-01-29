import './App.css';
import Container from './components/Container';
import Header from './components/Header/Header';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   useQuery,
//   gql
// } from "@apollo/client";


function App() {
  // console.log(useQuery());
//   const categories = new ApolloClient({
//     uri: 'http://localhost:4000/',
//     cache: new InMemoryCache()
//   });
  
//   categories
// .query({
//   query: gql`
//     query GetCategories {
//       categories{
//         products{
//           id
//           category
//           prices{
//             currency{
//               label
//               symbol
//             }
//             amount
//           }
//           brand
//         }
//       }
//     }
//   `
// })
// .then(result => console.log(result));

  
  return (
    <Container>
    <Header/>
    </Container>
  );
}

export default App;
