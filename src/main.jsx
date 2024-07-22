import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { ShoppingCartPage } from './pages/ShoppingCartPage/ShoppingCartPage';
import { OrderCompletePage } from './pages/OrderCompletePage/OrderCompletePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/product",
    element: <ProductPage />
  },
  {
    path: "/shoppingcart",
    element: <ShoppingCartPage />
  },
  {
    path: "/ordercomplete",
    element: <OrderCompletePage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
