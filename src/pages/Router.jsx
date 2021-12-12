import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";
import Login from "./Login";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import AddProducts from "./AddProducts";
import MyProducts from "./MyProducts";
import EditProducts from "./EditProducts";

function PrivateOutlet() {
  const token = useSelector(state => state.auth.token)
  if (token !== null) {
    return <Outlet />
  }
  else {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'You must login first!',
      showConfirmButton: false,
      timer: 1500
    })
    return <Navigate to="/login" />
  }
}
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<PrivateOutlet />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="addProduct" element={<AddProducts />} />
        <Route path="products" element={<MyProducts />} />
        <Route path="products/:id" element={<EditProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
