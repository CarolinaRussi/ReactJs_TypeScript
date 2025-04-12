import { BsSearch } from "react-icons/bs";
import styles from "./home.module.css";
import { Link, useNavigate } from "react-router";
import { FormEvent, useEffect, useState } from "react";

export interface CoinProps {
  id: string;
  name: string;
  rank: string;
  supply: string;
  symbol: string;
  explorer: string;
  vwap24Hr: string;
  priceUsd: string;
  maxSupply: string;
  marketCapUsd: string;
  changePercent24Hr: string;
  volumeUsd24Hr: string;
  formatedPrice?: string;
  formatedMarket?: string;
  formatedVolume?: string;
}

interface DataProp {
  data: CoinProps[];
}

export function Home() {
  const [input, setInput] = useState("");
  const [coins, setCoins] = useState<CoinProps[]>([]);
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `https://rest.coincap.io/v3/assets?limit=10&offset=${offset}`,
          {
            headers: {
              Authorization:
                "Bearer 33c65ebf886203cde8196f8fdaacbab7876656a4f5513681cfd934ac7c084dd0",
            },
          }
        );
        const json: DataProp = await response.json();
        const coinsData = json.data;

        const price = Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        });

        const priceCompact = Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          notation: "compact",
        });

        const formatedResult = coinsData.map((item) => {
          const formated = {
            ...item,
            formatedPrice: price.format(Number(item.priceUsd)),
            formatedMarket: priceCompact.format(Number(item.marketCapUsd)),
            formatedVolume: priceCompact.format(Number(item.volumeUsd24Hr)),
          };
          return formated;
        });
        const listCoins = [...coins, ...formatedResult];
        setCoins(listCoins);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    }
    getData();
  }, [offset]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (input === "") return;

    navigate(`/detail/${input}`);

    console.log(input);
  }

  function handleGetMore() {
    if (offset === 0) {
      setOffset(10);
      return;
    }
    setOffset(offset + 10);
  }

  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o nome da moeda... Ex bitcoin"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <BsSearch size={30} color="#FFF" />
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th scope="col">Moeda</th>
            <th scope="col">Valor mercado</th>
            <th scope="col">Preço</th>
            <th scope="col">Volume</th>
            <th scope="col">Mudança 24h</th>
          </tr>
        </thead>
        <tbody id="tbody">
          {coins.length > 0 &&
            coins.map((item) => (
              <tr className={styles.tr} key={item.id}>
                <td className={styles.tdLabel} data-label="Moeda">
                  <div className={styles.name}>
                    <img
                      className={styles.logo}
                      alt="Logo Cripto"
                      src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}2@2x.png`}
                    />
                    <Link to={`/detail/${item.id}`}>
                      <span>{item.name}</span> | {item.symbol}
                    </Link>
                  </div>
                </td>

                <td className={styles.tdLabel} data-label="Valor mercado">
                  {item.formatedMarket || item.marketCapUsd}
                </td>

                <td className={styles.tdLabel} data-label="Preço">
                  {item.formatedPrice || item.priceUsd}
                </td>

                <td className={styles.tdLabel} data-label="Volume">
                  {item.formatedVolume || item.volumeUsd24Hr}
                </td>

                <td
                  className={
                    Number(item.changePercent24Hr) > 0
                      ? styles.tdProfit
                      : styles.tdLoss
                  }
                  data-label="Mudança 24h"
                >
                  <span>{Number(item.changePercent24Hr).toFixed(2)}</span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <button className={styles.buttonMore} onClick={handleGetMore}>
        Carregar mais
      </button>
    </main>
  );
}
