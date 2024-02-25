import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Home from './Component/Home/Home';
import Layout from './Component/Layout/Layout';

import AuthProvider from './Component/Provider/AuthProvider';
import Registers from './Component/Login/Login';

import AddProduct from './Component/AddProduct/AddProduct';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Cart from './Component/Cart/Cart';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import ProductDetailCard from './Component/ProductDetailCard/ProductDetailCard';
import UpdateProduct from './Component/UpdateProduct/UpdateProduct';
import DetailsPro from './Component/DetailsPro/DetailsPro';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('/features.json')
      },
      {
        path:'/product',
        element:<PrivateRoute><AddProduct></AddProduct> </PrivateRoute>
      },
    
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/details/:brand',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://b8a10-brandshop-server-side-rony-1234.vercel.app/product/${params.brand}`)
      },
      {
        path:'detailcard',
        element:<ProductDetailCard></ProductDetailCard>
      },
      {
        path:'/update/:id',
        element:<UpdateProduct></UpdateProduct>,
        loader:({params}) => fetch(`https://b8a10-brandshop-server-side-rony-1234.vercel.app/product/${params.id}`)
      },
      {
        path:'/detailspro/:id',
        element:<DetailsPro></DetailsPro>,
        loader:({params}) => fetch(`https://b8a10-brandshop-server-side-rony-1234.vercel.app/product/${params.id}`)
        
      },
      {
        path:'/cart/:id',
        element:<Cart></Cart>,
        loader:({params}) => fetch(`https://b8a10-brandshop-server-side-rony-1234.vercel.app/product/${params.id}`)
      },
    ]
    }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
     
  </React.StrictMode>,
)
