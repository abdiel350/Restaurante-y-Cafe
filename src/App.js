import React, { Fragment } from 'react';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Fragment>
      <body>
            <header>
            <Navbar />
            </header>
            <Body />     
            <Footer/>        
      </body>      
    </Fragment>
  );
}

export default App;
