import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App_Coffee() {
  return (
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <div>
      <h1>Coffee House</h1> <br/>
      <li style={{color: '#ff0000'}}>Coffe</li><br/>
      <li style={{color: '#0000FF'}}>Tea</li><br/>
      <li style={{color: '#FFFF00'}}>Milk</li><br/>
      <li>Other</li>
    </div>
  );
}


function App () {
  const [Visible, setearVisible] = useState(true);
  const [Name, setName] = useState("German");

  useEffect(()=>{
    const timer = setTimeout(() => {
      document.title = `Hola ${Name}`
    }, 3000);

    return function cleanup() {
      clearTimeout(timer);
    }

  }, [Name]);


  return (
    <React.Fragment>
    
      <button onClick={()=>{setearVisible(!Visible)}}>Ocultar</button>
    {Visible && 
      <Saludo nombre="German"></Saludo>
    }
    
    <input type="text" value={Name} onChange={event=>
      setName(event.target.value)
    }/>
    </React.Fragment>
  );
}

function Saludo (props) {
    return (
      <div>Hola {props.nombre}</div>
      
    )
}

export default App;
