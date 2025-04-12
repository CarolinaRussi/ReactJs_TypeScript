import { useState, useEffect, useRef, useMemo, useCallback } from "react";

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const firstRender = useRef(true);
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [edit, setEdit] = useState({
    enabled: false,
    task: "",
  });

  useEffect(() => {
    const savedTasks = localStorage.getItem("@cursoreact");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    localStorage.setItem("@cursoreact", JSON.stringify(tasks));
  }, [tasks]);


  const handleRegister = useCallback(() => {
    if (!input) {
      alert("Digite o nome da tarefa");
      return;
    }

    if (edit.enabled) {
      handleSaveEdit();
      return;
    }

    setTasks((tarefas) => [...tarefas, input]);
    setInput("");
  }, [input, tasks]);

  function handleSaveEdit() {
    const findIndexTask = tasks.findIndex((task) => task === edit.task);
    const allTasks = [...tasks];

    allTasks[findIndexTask] = input;
    setTasks(allTasks);

    setEdit({ enabled: false, task: "" });
    setInput("");
  }

  function handleDelete(item: string) {
    const newTasks = tasks.filter((task) => task !== item);
    setTasks(newTasks);
  }

  function handleEdit(item: string) {
    inputRef.current?.focus();
    setInput(item);
    setEdit({ enabled: true, task: item });
  }

  const totalTasks = useMemo(() => {
    return tasks.length;
  }, [tasks]);

  return (
    <div>
      <h1> Lista de Tarefas </h1>
      <input
        placeholder="Digite o nome da tarefa..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />
      <button onClick={handleRegister}>
        {edit.enabled ? "Salvar tarefa" : "Adicionar tarefa"}
      </button>

      <hr />

      <strong>Você tem {totalTasks} tarefas!</strong>
      <br />
      <br />

      {tasks.map((item, index) => (
        <section key={item}>
          <span>{item}</span>
          <button onClick={() => handleEdit(item)}>Editar</button>
          <button onClick={() => handleDelete(item)}>Excluir</button>
        </section>
      ))}
    </div>
  );
}
