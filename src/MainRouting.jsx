import { Route, Routes, BrowserRouter as Router, Navigate  } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { TokenPage } from "./pages/TokenPage/TokenPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { TableListPage } from "./pages/TableListPage/TableListPage";
import { CreateTeamPage } from "./pages/CreateTeamPage/CreateTeamPage";

export function MainRouting() {

    return (
        <Router>
            <Routes>
                <Route path="/auth" element={<AuthPage />}/>
                <Route path="/reg" element={<RegistrationPage />}/>
                <Route path="/token/:token" element={<TokenPage />}/>
                <Route path="/tables" element={<TableListPage />}/>
                <Route path="/create" element={<CreateTeamPage />}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </Router>
    )
}