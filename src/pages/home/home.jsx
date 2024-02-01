import Navbar from "../../components/navbar/navbar";
import ProdutoVitrine from "../../components/produto-vitrine/produto-vitrine";
import { produtos } from "../../dados";

function Home() {
    return (
        <>
            <Navbar showMenu={true} />
            <div className="container-cardapio">
                <div className="titulo">
                    <h1>Nosso cardápio</h1>
                    <p className="sub-titulo">
                        Clique em adicionar para colocar os produtos na sacola
                        de compras.<br></br> Se preferir, você pode pedir pelo
                        WhatsApp (99) 99999-9999
                    </p>
                </div>
            </div>

            <div className="container-produtos-vitrine">
                {produtos.map(function (prod) {
                    return (
                        <ProdutoVitrine
                            key={prod.id}
                            id={prod.id}
                            nome={prod.nome}
                            descricao={prod.descricao}
                            preco={prod.preco}
                            foto={prod.foto}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default Home;
