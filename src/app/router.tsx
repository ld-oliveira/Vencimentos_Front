import { Route, Routes, BrowserRouter} from "react-router-dom"

import App from "../pages/App";
import Form from "../pages/Form";


function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/cadastro" element={<Form />} />
            </Routes>    
        </BrowserRouter>
    )
}

export default Router