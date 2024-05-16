import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Portal from "./Pages/Portal/Portal"
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />}> </Route>
            <Route path="/Portal" element={<Portal />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes