import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy } from 'react';


const AuthPage = lazy(() => import('./pages/AuthPage/AuthPage'))
const TokenPage = lazy(() => import('./pages/TokenPage/TokenPage'))
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'))
const TemplatePage = lazy(() => import('./pages/TemplatePage/TemplatePage'))
const TableListFragment = lazy(() => import('./pages/TableListPage/TableListFragment'))
const CreateTeamFragment = lazy(() => import('./pages/CreateTeamPage/CreateTeamFragment'))
const NotFoundPageContent = lazy(() => import('./pages/NotFoundPage/NotFoundPageContent'))
const TableFragment = lazy(() => import('./pages/TablePage/TableFragment'))
const TableFragmentTransferStoryPage = lazy(() => import('./pages/TableTransferStoryPage/TableFragmentTransferStory'))


export function MainRouting() {

    const router = createBrowserRouter([
        { path: '/auth', element: (<AuthPage />) },
        { path: '/reg', element: (<RegistrationPage />) },
        { path: '/token/:token', element: (<TokenPage />) },
        { path: '/', element: (<TemplatePage />), children: [
            { path: 'table/:id', element: (<TableFragment />), children: [
                { path: 'transfers', element: (<TableFragmentTransferStoryPage/>) }
            ] },
            { path: 'tables', element: (<TableListFragment />) },
            { path: 'create', element: (<CreateTeamFragment />) },
            { path: '*', element: (<NotFoundPageContent/>) },
        ]},        
    ])

    return (
        <RouterProvider router={router} />
    )
}