import Home from "./routes/home/home.component";
import {Routes, Route} from "react-router-dom";
import Navbar from "./routes/navbar/navbar.component";
import SignIn from "./routes/auth/auth.component";
import Shop from "./routes/shop/shop.component";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navbar/>}>
                <Route index element={<Home/>}/>
                <Route path="shop" element={<Shop/>}/>
                <Route path="sign-in" element={<SignIn/>}/>
            </Route>
        </Routes>
    );
}

export default App;
