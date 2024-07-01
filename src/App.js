import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Elemento } from './components/Elementos';
import Information from './components/Information';
const baseUrl = 'http://localhost:3001/api/elements'

function App() {
  const [element, setElement] = useState([]);
  const [elementToShow, setElementToShow] = useState('');
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    axios 
      .get(baseUrl)
      .then(response => {
        setElement(response.data);
    })},[])

    //conseguir entrar en un elemento específico
    const handleClick = () => {
      setIsActive(!isActive);
      console.log(elementToShow)
    }

    const handleClose = () => {
      setIsActive(false)
    }

  const forInformation = element.filter(el => el.name === elementToShow);

  return (
    <div className='App'>
      {element.map(el => 
        <Elemento click={() => {
          setElementToShow(el.name);
          handleClick();
        }} classy={`elements ${el.name} ${el.category}`} key={el.name} nombre={el.name} simbolo={el.symbol} numAtomico={el.number} />)}
  
      {forInformation.map(el => 
        <Information class={isActive ? 'active' : 'inactive'}
          name={el.name} source={el.source}
          link={el.image.url} alt={el.image.title}
          discovered={el.discovered_by}
          category={el.category}
          mass={el.atomic_mass}
          density={el.density}
          boil={el.boil}
          melt={el.melt}
          phase={el.phase}
          configuration={el.electron_configuration}
          onClick={handleClose} />
      )}
      
    </div>
  );
}

export default App;
