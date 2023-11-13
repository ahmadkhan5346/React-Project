import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    return (
        <>

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path="contact" element={<Contact/>}/>
                
            </Route>
        </Routes>
        </BrowserRouter>

        </>
    );
}

export default App;
