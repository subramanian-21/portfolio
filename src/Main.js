import App from "./App";

import Games from "./components/Games";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
const Main = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" Component={App}></Route>
                <Route path="/mini" Component={Games}></Route>
               
            </Routes>
        </Router>
    )
}

export default Main