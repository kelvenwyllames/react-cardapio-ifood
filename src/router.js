import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Checkout from "./pages/checkout/checkout";
import Historico from "./pages/historico/historico";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Checkout />} />
                <Route path="/" element={<Historico />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
