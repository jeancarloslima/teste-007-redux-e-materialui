import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "./store";
import { adicionarItem, limparCarrinho } from "./carrinhoSlice";

function MeuCarrinho() {
  const totalItens = useSelector((state) => state.carrinho.totalItens);

  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>🛒 Resumo da Compra</h2>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
        Itens no carrinho: <span style={{ color: "blue" }}>{totalItens}</span>
      </p>

      <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
        <button
          onClick={() => dispatch(adicionarItem())}
          style={{
            padding: "10px 20px",
            background: "#22c55e",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Adicionar Item (+1)
        </button>

        <button
          onClick={() => dispatch(limparCarrinho())}
          style={{
            padding: "10px 20px",
            background: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Esvaziar Carrinho
        </button>
      </div>
    </div>
  );
}

export default function Tela01() {
  return (
    <Provider store={store}>
      <MeuCarrinho />
    </Provider>
  );
}
