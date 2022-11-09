import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import Nav from './components/nav/nav';
import Experience from './components/experience/experience'
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';



// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { setContext } from '@apollo/client/link/context';

// const httpLink = createHttpLink({
//   uri: '/graphql'
// });


// // const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App() {
  return (

    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Contact/>
    <Footer/>
    
    </>



  );
}

export default App;
