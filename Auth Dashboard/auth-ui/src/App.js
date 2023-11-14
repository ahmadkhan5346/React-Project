import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginReg from "./components/pages/auth/LoginReg";
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail";
import ResetPassword from "./components/pages/auth/ResetPassword";


function App() {
    return (
        <>

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="login" element={<LoginReg/>}/>
            <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail/>}/>
            <Route path="resetpassword" element={<ResetPassword/>}/>
                
            </Route>
        </Routes>
        </BrowserRouter>

        </>
    );
}

export default App;
