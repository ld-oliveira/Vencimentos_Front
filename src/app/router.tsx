import { Route, Routes, BrowserRouter} from "react-router-dom"

import Form from "../pages/Form";
import Home from "../pages/Home";


function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Form />} />
            </Routes>    
        </BrowserRouter>
    )
}

export default Router