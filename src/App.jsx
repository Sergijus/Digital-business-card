import React from 'react';
import './App.css';
import Info from './components/Info';
import Main from './components/Main';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <div className="mainContainer">
        <Info />
        <Main />
        <Footer />
      </div>
    </>
  );
}
