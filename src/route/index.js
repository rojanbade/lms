import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Product from "../component/product";
import Todo from "../component/todo";
import Album from "../component/album";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/service",
    element: <Todo />,
  },

  {
    path: "/album",
    element: <Album />,
  },
]);
