import "./navbar.css";
import logofood from "../../assets/logo-food.png";
import sacola from "../../assets/sacolinha.svg";
import Cart from "../cart/cart";
import { Link } from "react-router-dom";

function Navbar(props) {
    function openSidebar() {
        const event = new CustomEvent("openSidebar");
        window.dispatchEvent(event);
    }

    return (
        <div className="navbar">
            <Link to={"/"}>
                <img
                    className="logotipo"
                    src={logofood}
                    alt="logotipo - food"
                />
            </Link>
            {props.showMenu ? (
                <div className="menu">
                    <Link to="/historico">Histórico</Link>
                    <button onClick={openSidebar} className="btn btn-red">
                        <img className="icon" src={sacola} alt="" />
                        Sacola
                    </button>
                </div>
            ) : null}

            <Cart />
        </div>
    );
}

export default Navbar;
