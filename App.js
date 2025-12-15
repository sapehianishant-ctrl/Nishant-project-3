import React from 'react';
import Navbar from './component/Navbar/Navbar';
import Home from './component/pages/home/Home';
import Footer from './component/Footer/Footer';

const App = () => {
  return (
    <div className="main">
    
    <Navbar />
     <Home /> 
     <Footer />

    </div>
  );
}

export default App;
