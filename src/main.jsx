import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Practice from "./Practice";
import Footer from "./Footer";
import EmmaText from "./EmmaText";
import AllUsers from "./AllUsers";
import Login from "./Login";
import RegisterForm from "./RegisterForm";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EmmaText>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/allusers" element={<AllUsers/>}/>
          <Route path="/practice" element={<Practice/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/reset-password/:resetToken" element={<ResetPassword/>}/>
        </Routes>
      </BrowserRouter>
    </EmmaText>
      
   
  </StrictMode>
);
