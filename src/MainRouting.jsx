import { Route, Routes, BrowserRouter as Router, Navigate  } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { TokenPage } from "./pages/TokenPage/TokenPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";

export function MainRouting() {

    return (
        <Router>
            <Routes>
                <Route path="/auth" element={<AuthPage />}/>
                <Route path="/reg" element={<RegistrationPage />}/>
                <Route path="/token/:token" element={<TokenPage />}/>
            </Routes>
        </Router>
    )
}