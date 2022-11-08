import logo from './logo.svg';
import './App.css';
import Header from './header/header'
import Nav from './nav/nav';
import Experience from './experience/experience'
import About from './about/about';
import Contact from './contact/contact';
import Footer from './footer/footer';



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
