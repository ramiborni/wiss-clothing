import Home from "./routes/home/home.component";
import {Routes,Route } from "react-router-dom";
import Navbar from "./routes/navbar/navbar.component";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navbar/>}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
    );
}

export default App;
