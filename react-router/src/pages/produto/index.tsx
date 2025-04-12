import { Link, useParams } from "react-router";

export function Produto() {
  const { id } = useParams();
  return (
    <div>
      <h1>Página do Produto {id}</h1>

      <hr />
      <Link to="/contato">Contato</Link>
      <br />
      <Link to="/">Home</Link>
    </div>
  );
}
