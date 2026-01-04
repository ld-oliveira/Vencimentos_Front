import "../styles/Home.scss";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useState } from "react";

type Produto = {
  id: string;
  produto: string;
  quantidade: number;
  validade: string;
};

function Home() {
  const [termo, setTermo] = useState("");
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);
  const [produtos, setProdutos] = useState<Produto[]>([]);

  function handlePesquisar() {
    if (!termo.trim()) return;

    // depois você coloca o fetch aqui e preenche:
    // setProdutoSelecionado(produtoDaApi)
    // setProdutos(listaDaApi)
  }

  return (
    <>
      <Header />

      <section>
        <div className="Pesquisa-produto">
          <label className="label-home">
            Produto
            <input
              type="text"
              name="produto"
              placeholder="Pesquise seu produto aqui"
              value={termo}
              onChange={(e) => setTermo(e.target.value)}
            />
          </label>
        </div>

        <div>
          <button type="button" className="Botao-pesquisa" onClick={handlePesquisar}>
            Pesquisar
          </button>
        </div>

        <div className="detalhes-produto">
          <div className="produto-nome">{produtoSelecionado?.produto ?? ""}</div>
          <div className="produto-quantidade">{produtoSelecionado?.quantidade ?? ""}</div>
          <div className="produto-validade">{produtoSelecionado?.validade ?? ""}</div>

          <button className="btn-editar-produto" type="button" disabled={!produtoSelecionado}>
            Editar
          </button>
        </div>

        <figure className="img-produto">
          <img
            src=""
            alt={produtoSelecionado ? `Visualização do produto ${produtoSelecionado.produto}` : "Visualização do produto"}
            referrerPolicy="no-referrer"
          />
        </figure>

        <div className="infos-extra">
          {produtoSelecionado && (
            <Link to={`/produto/${produtoSelecionado.id}`} className="btn-detalhes">
              Ver detalhes
            </Link>
          )}
        </div>

        <section className="proximos-vencimentos" aria-labelledby="titulo-vencimentos">
          <h3 id="titulo-vencimentos">Próximos vencimentos</h3>

          <table className="tabela-vencimentos">
            <thead>
              <tr>
                <th scope="col">Produto</th>
                <th scope="col">Data</th>
                <th scope="col">Quantidade em estoque</th>
              </tr>
            </thead>

            <tbody>
              {produtos.map((item) => (
                <tr key={item.id}>
                  <td>{item.produto}</td>
                  <td>{item.validade}</td>
                  <td>{item.quantidade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </>
  );
}

export default Home;
