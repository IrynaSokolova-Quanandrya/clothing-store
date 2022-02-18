import './App.css';
import Container from './components/Container';
import Header from './components/Header/Header';
import CategoryPage from './components/pages/CategoryPage/CategoryPage';
import api from './serviceApi';
import {gql} from "@apollo/client";

function App() {

// api.fetchAllCategories()
// api.fetchAllData()
// api.fetchDataForCard()
  
  return (
    <Container>
        <Header/>
        <CategoryPage/>
    </Container>
  );
}

export default App;
