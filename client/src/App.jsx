import {
  createBrowserRouter,
  RouterProvider,
  Outlet, //Our navbar n footer need not be added to every single component separately instead use this
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Error from "./pages/Error/Error";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./app.scss";
const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
//creating roots
// A <BrowserRouter> stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,//thus now there a base layout, then the content changes according to the child routes
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      //for 404 page (any undefined route)
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      {/* RouterProvider provides routes  */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
