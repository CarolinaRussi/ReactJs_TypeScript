import { useState } from "react";
import "./App.css";

function App() {
  const [year, setYear] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  function calculate(year: number) {
    const actualYear = new Date().getFullYear();
    const actualAge = actualYear - year;
    setAge(actualAge);
  }

  return (
    <div>
      <main className="container">
        <h1 className="title">Descubra sua idade</h1>
        <form className="form">
          <label>Digite seu nome:</label>
          <br></br>
          <input
            className="input"
            type="string"
            placeholder="Digite seu nome"
            required
            value={name}
            onChange={(e) => setName(String(e.target.value))}
          />
          <br></br>
          <br></br>
          <label>Digite seu ano de nascimento: </label>
          <br></br>
          <input
            className="input"
            type="number"
            placeholder="Digite seu ano de nascimento"
            required
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          />
          <br></br>
          <button
            className="button"
            onClick={(e) => {
              e.preventDefault();
              if (year > 1900 && year <= new Date().getFullYear()) {
                calculate(year);
              } else {
                alert("Digite um ano válido.");
              }
            }}
          >
            Calcular
          </button>
        </form>
        <br></br>
        {name && age && Object.keys(name).length > 0 && (
          <h1 className="title">
            {name} tem/fará {age} anos em {new Date().getFullYear()}
          </h1>
        )}
      </main>
    </div>
  );
}

export default App;
