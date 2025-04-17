export function Cart() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

      <section className="flex items-center justify-between border-b-3 border-teal-600">
        <img
          src="https://darkside.vtexassets.com/arquivos/ids/199380/sono_eterno_das_margaridas_loja_mini_capa.png?v=638791478878300000"
          alt="Logo produto"
          className="w-28 mb-2"
        />

        <strong>Preço: R$ 79,90</strong>

        <div className="flex items-center justify-center gap-3">
          <button className="bg-teal-600 px-2 rounded text-white font-medium flex items-center justify-center">
            {" "}
            -{" "}
          </button>
          1
          <button className="bg-teal-600 px-2 rounded text-white font-medium flex items-center justify-center">
            {" "}
            +{" "}
          </button>
        </div>

        <strong className="float-right">SubTotal: R$ 79,90</strong>
      </section>
      <p className="font-bold mt-4">Total: R$ 79,90</p>
    </div>
  );
}
