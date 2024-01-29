import Navbar from "../../components/navbar/navbar";
import "./historico.css";

function Historico() {
    return (
        <>
            <Navbar showMenu={true} />
            <div className="container-cardapio">
                <div className="titulo">
                    <h1>Histórico de Pedidos</h1>
                </div>

                <div className="box-pedido">
                    <table>
                        <tr>
                            <td>
                                <strong>Pedido 321431</strong>
                            </td>
                            <td className="text-light">14/01/2024</td>
                            <td className="text-red">R$ 500,00</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Pedido 321431</strong>
                            </td>
                            <td className="text-light">14/01/2024</td>
                            <td className="text-red">R$ 500,00</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Pedido 321431</strong>
                            </td>
                            <td className="text-light">14/01/2024</td>
                            <td className="text-red">R$ 500,00</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Pedido 321431</strong>
                            </td>
                            <td className="text-light">14/01/2024</td>
                            <td className="text-red">R$ 500,00</td>
                        </tr>

                        <tr>
                            <td>
                                <strong>Pedido 321431</strong>
                            </td>
                            <td className="text-light">14/01/2024</td>
                            <td className="text-red">R$ 500,00</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Historico;
