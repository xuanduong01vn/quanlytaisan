
import './App.css';
import styled from 'styled-components';
import Header from './components/Header.js';
import Menu from './components/Menu.js';




function App() {
  return (
      <div className="App">
        <Menu/>
        <div className="main-container">
          <Header/>
        </div>
      </div>
    
  );
}



export default App;
