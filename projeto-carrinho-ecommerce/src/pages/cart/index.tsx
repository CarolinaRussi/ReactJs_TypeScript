import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router";

export function Cart() {
  const { cart, total, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <p className="font-medium">Ops, seu carrinho está vazio...</p>
          <Link
            to="/"
            className="bg-teal-900 my-3 p-1 px-3 text-white font-medium rounded"
          >
            Acessar produtos
          </Link>
        </div>
      )}
      {cart.map((item) => (
        <section
          key={item.id}
          className="flex items-center justify-between border-b-3 border-teal-600"
        >
          <img src={item.cover} alt={item.title} className="w-28 mb-2 mt-2" />

          <strong>
            Preço:{" "}
            {item.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => removeItemFromCart(item)}
              className="bg-teal-600 px-2 rounded text-white font-medium flex items-center justify-center"
            >
              {" "}
              -{" "}
            </button>
            {item.amount}
            <button
              onClick={() => addItemToCart(item)}
              className="bg-teal-600 px-2 rounded text-white font-medium flex items-center justify-center"
            >
              {" "}
              +{" "}
            </button>
          </div>

          <strong className="float-right">
            SubTotal:
            {item.total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </section>
      ))}
      {cart.length !== 0 && <p className="font-bold mt-4">Total: {total}</p>}
    </div>
  );
}
