import "./App.css";
import LoginPage from "../src/pages/LoginPage.jsx";
import RegisterPage from "../src/pages/RegisterPage.jsx";
import OtpPage from "../src/pages/OtpPage.jsx";
import ForgotPasswordPage from "../src/pages/ForgotPasswordPage.jsx";
import ResetPasswordPage from "../src/pages/ResetPasswordPage.jsx";
import EmailVerificationPage from "../src/pages/EmailVerificationPage.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/email-verification" element={<EmailVerificationPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
