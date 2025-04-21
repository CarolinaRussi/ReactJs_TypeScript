import { useActionState } from "react";

export function UseActionState() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleSubmit(prevState: any, formData: FormData) {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 2000));
    const nome = formData.get("nome");
    console.log(prevState);

    if (typeof nome === "string" && nome.length < 4) {
      return {
        text: "Digite um nome maior!",
      };
    }

    return {
      text: `Bem-vindo(a) ${nome}`,
    };
  }

  const [state, formAction, pending] = useActionState(handleSubmit, null);

  return (
    <div>
      <h1>Conhecendo o useActionState</h1>

      <form action={formAction}>
        <input type="text" placeholder="Digite seu nome" name="nome" />
        <button type="submit">{pending ? "Enviando..." : "Cadastrar"}</button>
      </form>

      {state && <h1>{state.text}</h1>}
    </div>
  );
}
