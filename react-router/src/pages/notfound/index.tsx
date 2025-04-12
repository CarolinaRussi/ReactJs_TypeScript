import { Link } from "react-router"

export function NotFound(){
    return(
        <div>
            <h1>Ops essa página não existe!!</h1>
            <Link to="/">Voltar para Home</Link>
        </div>
    )
}