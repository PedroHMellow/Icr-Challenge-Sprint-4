import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Portal from "./Pages/Portal/Portal"
import Servicos from "./Pages/Servicos/Servicos"
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Exames from "./Pages/Servicos/Exames";
import Preparo_Exames from "./Pages/Servicos/Preparo_Exames";




function AppRoutes() {
    return (
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/Portal" element={<Portal />}></Route>
                <Route path="/Servicos" element={<Servicos />}></Route>
                <Route path="/Exames" element={<Exames />}></Route> 
                <Route path="/Preparo_Exames" element={<Preparo_Exames />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes