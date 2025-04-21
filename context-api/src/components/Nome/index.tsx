import { useContext, use } from "react";
import { UserContext } from "../../contexts/user";

export function Nome() {
  //const { aluno } = useContext(UserContext);
  const { aluno } = use(UserContext);

  return (
    <div>
      <strong>Aluna: {aluno}</strong>
      <br />
    </div>
  );
}
