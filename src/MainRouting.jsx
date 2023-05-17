import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

const AuthPage = lazy(() => import("./pages/AuthPage"));
const TokenPage = lazy(() => import("./pages/TokenPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const TemplatePage = lazy(() => import("./pages/TemplatePage"));
const TableListFragment = lazy(() => import("./pages/TableListPage"));
const CreateTeamFragment = lazy(() => import("./pages/CreateTeamPage"));
const TableFragment = lazy(() => import("./pages/TablePage"));
const TableFragmentTransferStoryPage = lazy(() =>
  import("./pages/TableTransferStoryPage")
);
const TableInfoPage = lazy(() => import("./pages/TableInfoPage"))
const TableCardsPage = lazy(() => import("./pages/TableCardsPage"))
const TableTransferPage = lazy(() => import("./pages/TableTransferPage"))

export function MainRouting({ token }) {
  const unAuthedRouting = createBrowserRouter([
    { path: "/auth", element: <AuthPage /> },
    { path: "/reg", element: <RegistrationPage /> },
    { path: "/token/:token", element: <TokenPage /> },
    { path: "*", element: <AuthPage /> },
  ]);

  const router = createBrowserRouter([
    { path: "/token/:token", element: <TokenPage /> },
    {
      path: "/",
      element: <TemplatePage />,
      children: [
        {
          path: "table/:id",
          element: <TableFragment />,
          children: [
            { path: "", element: <TableInfoPage/>},
            { path: "transfers", element: <TableFragmentTransferStoryPage /> },
            { path: "wallets", element: <TableCardsPage /> },
            { path: "transaction", element: <TableTransferPage /> },
            { path: "*", element: <TableFragmentTransferStoryPage /> },
          ],
        },
        { path: "tables", element: <TableListFragment /> },
        { path: "create", element: <CreateTeamFragment /> },
        { path: "*", element: <TableListFragment /> },
      ],
    },
  ]);

  return <RouterProvider router={token ? router : unAuthedRouting} />;
}
