import { useContext } from "react";
import { UserContext } from "../../contexts/user";

export function Footer() {
  const { qtdAlunos, novoAluno } = useContext(UserContext);
  return (
    <div>
      <hr />
      <h3>Footer</h3>
      <h4>Alunos online na plataforma:{qtdAlunos}</h4>
      <button onClick={() => novoAluno()}>Novo Aluno</button>
    </div>
  );
}
