import React from 'react';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <h1 className='mt-5 mb-4'>Check out the best products</h1>
        <ProductList/>
      </div>
    </div>
  );
}

export default App;
