import { useState } from "react"

interface InfoAlunoProps{
  nome: string;
  idade: string;
}

export default function App(){
  const [input, setInput] = useState("")
  const [idade, setIdade] = useState("")

  const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>()

  const [contador, setContador] = useState(0)
  
  function mostrarAlunoIdade(){
    setInfoAluno({
      nome: input,
      idade: idade,
    })
  }

  function adicionar(){
    setContador(valorAtual => valorAtual + 1)
  }

  function diminuir() {
    if (contador === 0) {
      return;
    }
    setContador(contador-1)
  }
  
  return(
    <div>
      <h1>Conhecendo UseState</h1>

      <input 
        placeholder="Digite o Nome:"
        value={input}
        onChange={ (e) => setInput(e.target.value)}
      />

      <br/><br/>
      <input 
        placeholder="Digite a Idade:"
        value={idade}
        onChange={ (e) => setIdade(e.target.value)}
      />

      <br/><br/>

      <button onClick={mostrarAlunoIdade}>Mostrar Aluno</button>

      <hr/>

      <h3>Bem vindo: {infoAluno?.nome}</h3>
      <h3>Idade: {infoAluno?.idade}</h3>

      <hr/>
      <br/>
      <h1>Contador com useState</h1>

      <button onClick={adicionar}>+</button> {contador} <button onClick={diminuir}>-</button>
    </div>
  )
}