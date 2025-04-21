import { useState } from "react";
import { ButtonSubmit } from "./Button";
import { NewUser } from "./Transition";
import { UseActionState } from "./useActionState";

function App() {
  const [message, setMessage] = useState("");

  async function handleRegister(formData: FormData) {
    //FAKE DELAY
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const nome = formData.get("nome");
    const tarefa = formData.get("tarefa");

    console.log(nome, tarefa);

    setMessage("Bem Vindo(a) " + nome + ", Tarefa Atual: " + tarefa);
  }

  return (
    <div>
      <h1>Form + Action</h1>

      <form action={handleRegister}>
        <input type="text" name="nome" placeholder="Digite seu nome" required />
        <br />
        <input
          type="text"
          name="tarefa"
          placeholder="Digite uma tarefa"
          required
        />
        <br />

        <ButtonSubmit />
      </form>

      <h2>{message}</h2>

      <hr />

      <NewUser />

      <hr />
      <UseActionState />
    </div>
  );
}

export default App;
