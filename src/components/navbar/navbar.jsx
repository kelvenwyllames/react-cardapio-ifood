import "./navbar.css";
import logofood from "../../assets/logo-food.png";
import sacola from "../../assets/sacolinha.svg";

function Navbar() {
    return (
        <div className="navbar">
            <img className="logotipo" src={logofood} alt="logotipo - food" />

            <div className="menu">
                <a href="http://">Histórico</a>
                <button className="btn btn-red">
                    <img className="icon" src={sacola} alt="" />
                    Sacola
                </button>
            </div>
        </div>
    );
}

export default Navbar;
