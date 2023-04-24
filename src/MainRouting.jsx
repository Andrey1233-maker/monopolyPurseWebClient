import { Route, Routes, BrowserRouter as Router, Navigate  } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { TokenPage } from "./pages/TokenPage/TokenPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { TemplatePage } from "./pages/TemplatePage/TemplatePage";
import { TableListFragment } from "./pages/TableListPage/TableListFragment";
import { CreateTeamFragment } from "./pages/CreateTeamPage/CreateTeamFragment";
import { NotFoundPageContent } from "./pages/NotFoundPage/NotFoundPageContent";
import { TableFragment } from "./pages/TablePage/TableFragment";

export function MainRouting({user}) {

    return (
        <Router>
            <Routes>
                <Route path="/auth" element={<AuthPage />}/>
                <Route path="/reg" element={<RegistrationPage />}/>
                <Route path="/token/:token" element={<TokenPage />}/>
                <Route path="/table/:id" element={<TemplatePage content={<TableFragment />}/>}/>

                {user && <>
                        <Route path="/tables" element={<TemplatePage content={<TableListFragment />} />}/>
                        <Route path="/create" element={<TemplatePage content={<CreateTeamFragment />} />}/>
                        <Route path="*" element={<TemplatePage content={<TableListFragment/>}/>}/>
                    </>
                }
                <Route path="*" element={<AuthPage/>}/>
            </Routes>
        </Router>
    )
}