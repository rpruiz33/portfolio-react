import React from 'react';
import './App.css';
import NavBar from './components/navBar.jsx';
import Footer from './components/footer.jsx';
import Cards from './components/cards.jsx';
import Carusel from './components/carusel.jsx';

function App() {
  return (

    <div className="bg-black" >

      <NavBar />
      
      <Carusel />
      <Cards/>
      <Footer />
    </div>
  )
}

export default App;
