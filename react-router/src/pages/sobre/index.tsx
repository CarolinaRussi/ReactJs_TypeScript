import { Link } from "react-router";

export function Sobre() {
  return (
    <div>
      <h1>Página Sobre!</h1>

      <hr />
      <Link to="/contato">Contato</Link>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
}
