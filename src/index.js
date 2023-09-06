import { ChakraProvider } from '@chakra-ui/react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import HomewithLogin from './HomewithLogin';
import Account from './account-profile';
import DA from './account-deliveryaddress';
import DAA from './account-adddeliveryaddress';
import OL from './account-orderlist';
import WL from './account-wishlist';
import WLL from './account-addwishlist';
import Cart from './New Component/Cart/CartPage';
import PaymentPage from './New Component/Payment/paymentinformationpage';
import PaymentDe from './New Component/Payment/paymentdeliverlypage';
import PaymentDeCAC from './New Component/Payment/ClickandCollectpage';
import PaymentDeSBT from './New Component/Payment/sendbytruckpage';
import OrderConSBT from './New Component/Payment/OrderConSBTpage';
import OrderConCAC from './New Component/Payment/OrderConCACpage';
import PD1 from './New Component/ProductPage/productpage1';
import ErrorPage from './New Component/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <Home/> 
    ,erroeElement:<ErrorPage/>
  },
  {
    path: "/HomewithLogin",
    element: 
    <HomewithLogin/>
    ,erroeElement:<ErrorPage/>
  },
  {
    path: "/Login",
    element: <Login/>
    ,erroeElement:<ErrorPage/>
  },
  {
    path: "/Account",
    element: <Account/>
    ,erroeElement:<ErrorPage/>
  },
  {
    path: "/DA",
    element: <DA/>
    ,erroeElement:<ErrorPage/>
  },
  {
    path: "/DAA",
    element: <DAA/>
    ,erroeElement:<ErrorPage/>
  },
  {
    path: "/OL",
    element: <OL/>
    ,erroeElement:<ErrorPage/>
  },
  {
    path: "/WL",
    element: <WL/>
    ,erroeElement:<ErrorPage/>
  },
  {
    path: "/WLL",
    element: <WLL/>
    ,erroeElement:<ErrorPage/>
  },
  {
    path: "/PD1",
    element: <PD1/>
    ,erroeElement:<ErrorPage/>
  },
  {
    path: "/Cart",
    element: <Cart/>
    ,erroeElement:<ErrorPage/>
  },
  {
    path: "/PaymentPage",
    element: <PaymentPage/>
    ,erroeElement:<ErrorPage/>
  },
  {
    path: "/PaymentDe",
    element: <PaymentDe/>
    ,erroeElement:<ErrorPage/>
  },
  {
    path: "/PaymentDeCAC",
    element: <PaymentDeCAC/>
    ,erroeElement:<ErrorPage/>
  },
  {
    path: "/PaymentDeSBT",
    element: <PaymentDeSBT/>
    ,erroeElement:<ErrorPage/>
  },
  {
    path: "/OrderConSBT",
    element: <OrderConSBT/>
    ,erroeElement:<ErrorPage/>
  },
  {
    path: "/OrderConCAC",
    element: <OrderConCAC/>
    ,erroeElement:<ErrorPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
