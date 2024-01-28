import "./produto-vitrine.css";
import foto from "../../assets/hamburguer.png";
import sacolinha2 from "../../assets/sacolinha2.png";

function ProdutoVitrine() {
    return (
        <div className="produto-box">
            <img src={foto} alt="hamburguer" />
            <div className="infos">
                <h2>Spicy Burger</h2>
                <p className="prod-vitrine-descricao">
                    Hamburguer de 250g, queijo, tomate, alface e cebola
                </p>
                <p className="prod-vitrine-preco">R$ 18,90</p>
            </div>
            <div>
                <button className="btn btn-cart">
                    <img className="icon" src={sacolinha2} alt="" />
                    Adicionar
                </button>
            </div>
        </div>
    );
}

export default ProdutoVitrine;
