import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Agencies from "./pages/Agencies";
import AgencyDetail from "./pages/AgencyDetail";
import Search from "./pages/Search";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";

// Layout
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/agencies/:id", element: <Agencies /> },
      { path: "/agency/:id", element: <AgencyDetail /> },
      { path: "/search", element: <Search /> },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
