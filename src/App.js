import React from 'react';
import './App.css';
import GiftList from './GiftList/GiftList';
import Header from './Header/Header';

function App() {
    return (
      <div className="App">
        <Header/>
        <GiftList/>
      </div>
    );
}

export default App;
