import { api } from "../../services/api";
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "../../contexts/CartContext";
import { ProductProps } from "../home";
import { useNavigate, useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({} as ProductProps);
  const { addItemToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProduct() {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    }

    getProduct();
  }, [id]);

  function handleAddItem(product: ProductProps) {
    toast.success("Produto adicionado ao carrinho!", {
      style: {
        borderRadius: 10,
        backgroundColor: "#121212",
        color: "#fff",
      },
      iconTheme: {
        primary: "#16635f",
        secondary: "#FFFAEE",
      },
    });
    addItemToCart(product);
    navigate("/cart");
  }

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto my-6">
        {product && (
          <section className="w-full">
            <div className="flex flex-col lg:flex-row">
              <img
                className="flex-1 w-full max-h-100 mt-4 object-contain"
                src={product?.cover}
                alt={product?.title}
              />
              <div className="flex-2">
                <p className="font-bold text-2xl mt-4 mb-2">{product?.title}</p>
                <p className="my-4">{product?.description}</p>
                <strong className="text-teal-700/90 text-xl">
                  {product.price
                    ? product.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })
                    : 0}
                </strong>
                <button
                  className="bg-teal-900 p-1 rounded ml-3"
                  onClick={() => handleAddItem(product)}
                >
                  <FaCartPlus size={20} color="#FFF" />
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
