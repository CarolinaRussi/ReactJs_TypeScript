import { Link } from "react-router";

export function Contato() {
  return (
    <div>
      <h1>Bem vindo a página contatos</h1>
      <span>Telefone: (xx) xxxx-xxxx</span>
      <hr />
      <Link to="/sobre">Sobre</Link>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
}
