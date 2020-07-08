import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

const App = () => {

  return (
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-header-menu">
          ClassBased VS Functional Components
          </div>
      </header>
      <main>
        <FunctionalComponent />
        <ClassComponent />
      </main>
      <footer>
        Copyright © 2020 None
      </footer>
    </div>
  );
}

export default App;
