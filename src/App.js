import React from 'react';
import 'typeface-roboto';
import Header from './Header';
import Banner from './Banner';
import Products from './Products';
import Trust from './Trust';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Products />
      <Trust />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
