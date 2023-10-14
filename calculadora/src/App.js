import {useState} from "react"
import './App.css';

function App() {
  const[valor1, setValor1] = useState("")
  const[valor2, setValor2] = useState("")
  const[ operacao, setOperacao] = useState("")

  const hendleSubmit = (e) =>{
    e.preventdefault();
    
  }
  return (
    <div className="App">
      <div className="visor"></div>
      <form onSubmit={hendleSubmit}>

        <label>valor1</label>
        <input></input>
        <label>valor2</label>
        <input></input>
        <button
          className="op"
         onClick={(e) => setOperacao("+") }
        >+</button>
        <button
        className="op"
         onClick={(e) => setOperacao("-") }
        >-</button>
        <button
        className="op"
         onClick={(e) => setOperacao("*") }
        >x</button>
        <button
        className="op"
         onClick={(e) => setOperacao("/") }
        >/</button>
         

          <button type="Submit">Enviar</button>
      </form>
  
    </div>
  );
}

export default App;
