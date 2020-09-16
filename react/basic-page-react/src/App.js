import React from 'react';
import './App.css';
import Form from "./components/form/form";
import List from "./components/list/list";

function App() {
  return (
    <div className="App">
      <div className="main">        
        <header className="App-header">
          <div className="header-info">
            <div className="logo">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <image className="logo-img" xlinkHref='/images/logo-in8-dev.svg' />
              </svg>
            </div>
            <div className="links">Links</div>
          </div>
        </header>

        <div className="main-info">
          <div className="titles">
            <div className="estagio">
              ESTÁGIO
            </div>
            <div className="estagio-sub">
              PROVA DE SELEÇÃO
            </div>
          </div>
        </div>
      </div>
      
      <Form />
      <List />

      <footer className="App-footer">
        Footer
      </footer>
    </div>
  );
}

export default App;
