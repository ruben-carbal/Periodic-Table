import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Elemento } from './components/Elementos';


function App() {
  const [element, setElement] = useState([]);
  
  useEffect(() => {
    axios 
      .get('http://localhost:3001/elements')
      .then(response => {
        setElement(element.concat(response.data));
    })}, [])

  return (
    <div className="App">
      {element.map(el => 
        <Elemento classy={`elements ${el.name} ${el.category}`} key={el.name} nombre={el.name} simbolo={el.symbol} numAtomico={el.number} />)}
    </div>
  );
}

export default App;
