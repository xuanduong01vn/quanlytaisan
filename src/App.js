
import './App.css';
import styled from 'styled-components';
import Header from './components/Header.js';
import Menu from './components/Menu.js';
import TableAsset from './components/TableAssets';



function App() {
  document.title="Quản lý tài sản";
  

  return (
      <div className="App">
        <Menu/>
        <div className="main-container">
          <Header/>
          <TableAsset/>
        </div>
      </div>
    
  );
}



export default App;
