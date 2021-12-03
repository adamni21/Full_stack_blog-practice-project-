import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Navigate, Routes } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './Components/layout/Header';
import Home from './Components/pages/Home/Home'
import About from './Components/pages/About/About';
import Contact from './Components/pages/Contact/Contact';
import PageNotFound from './Components/pages/404/PageNotFound';
import Article from "./Components/pages/Arcticle/Article";


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});




function App() {

  return (
    <Router>
      <div className="App">
        <Header/>
        <ApolloProvider client={client}>
          <Routes>
            <Route path="/home" element={ <Home/> }/>
            <Route path="/article/:id/*" element={ <Article/> }/>
            <Route path="/about" element={ <About/> }/>
            <Route path="/contact" element={ <Contact/> }/>
            <Route path="/" element={ <Navigate to="/home"/> }/>
            <Route path="/*" element={ <PageNotFound/> }/>
          </Routes>
        </ApolloProvider>
      </div>
    </Router>
  );
}

export default App;
