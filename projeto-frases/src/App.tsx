import { useState } from "react";
import "./App.css";
import logoImg from "./assets/logo2.jpg";

function App() {
  const [textoFrase, setTextoFrase] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);
  const allFrases = [
    // {
    //   id: 1,
    //   nome: "Motivacao",
    //   frases: [
    //     "Não importa o quão devagar você vá, desde que você não pare.",
    //     "A corrida não é sobre ser o melhor, mas sobre ser melhor do que você era ontem.",
    //     "Corra quando puder, caminhe se precisar, mas nunca desista.",
    //     "Você nunca sabe o quão forte você é até que correr se torne sua única opção.",
    //     "Cada quilômetro é uma vitória. Continue indo!",
    //     "Corra com o coração e o corpo vai seguir.",
    //     "Não espere pela motivação, crie-a a cada passo.",
    //     "A dor que você sente hoje é a força que você sentirá amanhã.",
    //     "Os melhores corredores não são os mais rápidos, mas os que nunca desistem.",
    //     "Não corra apenas para fugir, corra para conquistar.",
    //   ],
    // },
    // {
    //   id: 2,
    //   nome: "Bom dia",
    //   frases: [
    //     "Que o dia de hoje seja uma nova chance para criar algo incrível.",
    //     "Que a manhã traga a energia que você precisa para fazer acontecer.",
    //     "Abrace o novo dia com a certeza de que ele pode ser melhor do que você imagina.",
    //     "Hoje é uma página em branco. Escreva nela o que mais desejar.",
    //     "Bom dia! Que a serenidade de hoje te guie pelo caminho certo.",
    //     "A vida se renova a cada amanhecer. Aproveite as oportunidades que surgem.",
    //     "Que o dia de hoje te inspire a ser a sua melhor versão.",
    //     "Comece o dia com coragem para fazer o que te faz bem.",
    //     "Que sua manhã seja leve, e o resto do dia, ainda mais incrível.",
    //     "A cada amanhecer, a vida nos dá a chance de recomeçar. Aproveite!",
    //   ],
    // },
    {
      id: 3,
      nome: "Biscoitinho da sorte",
      frases: [
        "O vento traz consigo um segredo que você logo descobrirá.",
        "As sombras de hoje revelarão a luz de amanhã.",
        "O caminho menos visível é onde você encontrará a resposta.",
        "Alguém observará seu próximo passo com mais interesse do que você imagina.",
        "Uma decisão do passado retornará, mas com uma nova perspectiva.",
        "O eco de suas palavras será mais forte do que o que você disse.",
        "O silêncio guarda mais do que você pensa. Escute-o.",
        "O relógio que você ignora fará sentido em breve.",
        "Algo se perde antes que possa ser encontrado. Prepare-se para a revelação.",
        "A chave que você procura já está em suas mãos, mas você ainda não a percebeu.",
        "Em algum lugar entre o que você sabe e o que você deseja, a resposta se esconde.",
        "Alguns passos dados para trás serão necessários antes de avançar novamente.",
        "Há algo invisível ao seu redor que aguarda ser notado.",
        "Seu destino está alinhado, mas você precisa desviar de um pequeno obstáculo.",
        "Uma escolha que parece sem importância será a que mais mudará seu caminho.",
        "Os olhos de quem você menos espera trarão a verdade que você busca.",
        "Há um segredo no espelho. Preste atenção no reflexo.",
        "Um novo ciclo começa quando você finalmente soltar o que já não lhe serve.",
        "O som que você não ouve será o que mais te guiará.",
        "Seu próximo movimento será mais forte se você deixar de lado o que é familiar.",
      ],
    },
  ];

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index);
  }

  function gerarFrase() {
    const numeroAleatorio = Math.floor(
      Math.random() * allFrases[categoriaSelecionada].frases.length
    );

    setTextoFrase(
      `"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`
    );
  }

  return (
    <div className="container">
      <img alt="Logo frases" src={logoImg} className="logo" />

      <section className="category-area">
        {allFrases.map((item, index) => (
          <button
            key={item.id}
            className="category-button"
            style={{
              borderWidth:
                item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#ea5950",
            }}
            onClick={() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button className="button-frase" onClick={() => gerarFrase()}>
        Gerar frase
      </button>

      {textoFrase !== "" && <p className="texto-frase">{textoFrase}</p>}
    </div>
  );
}

export default App;
