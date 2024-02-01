import "./produto-vitrine.css";
import sacolinha2 from "../../assets/sacolinha2.png";
import { CartContext } from "../../contexts/cart-context";
import { useContext } from "react";

function ProdutoVitrine(props) {
    const { AddItemCart } = useContext(CartContext);

    function AddItem() {
        const item = {
            id: props.id,
            nome: props.nome,
            preco: props.preco,
            foto: props.foto,
            qtd: 1,
        };

        AddItemCart(item);
    }
    return (
        <div className="produto-box">
            <img src={props.foto} alt="hamburguer" />
            <div className="infos">
                <h2>{props.nome}</h2>
                <p className="prod-vitrine-descricao">{props.descricao}</p>
                <p className="prod-vitrine-preco">
                    {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(props.preco)}
                </p>
            </div>
            <div>
                <button onClick={AddItem} className="btn btn-cart">
                    <img className="icon" src={sacolinha2} alt="" />
                    Adicionar
                </button>
            </div>
        </div>
    );
}

export default ProdutoVitrine;
