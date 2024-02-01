import { createContext, useState } from "react";

const CartContext = createContext();

function CartProvider(props) {
    const [cartItens, setCartItens] = useState([]);
    const [totalCart, setTotalCart] = useState(0);

    function AddItemCart(item) {
        let cartItensNovo = [];
        let findItem = false;

        for (var prod of cartItens) {
            if (prod.id === item.id) {
                item.qtd = prod.qtd + 1;
                findItem = true;
                cartItensNovo.push(item);
            } else {
                cartItensNovo.push(prod);
            }
        }

        if (findItem === false || cartItens.length === 0) {
            cartItensNovo.push(item);
        }

        setCartItens(cartItensNovo);
        CalcTotal(cartItensNovo);
    }

    function RemoveItemCart(id) {
        let cartItensNovo = [];

        for (var prod of cartItens) {
            if (prod.id === id) {
                prod.qtd = prod.qtd - 1;
            }

            cartItensNovo.push(prod);
        }

        cartItensNovo = cartItensNovo.filter(function (item) {
            return item.qtd > 0;
        });

        setCartItens(cartItensNovo);
        CalcTotal(cartItensNovo);
    }

    function CalcTotal(items) {
        let tot = 0;
        for (var item of items) tot = tot + item.preco * item.qtd;

        setTotalCart(tot);
    }

    return (
        <CartContext.Provider
            value={{
                cartItens,
                setCartItens,
                AddItemCart,
                RemoveItemCart,
                totalCart,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider };
