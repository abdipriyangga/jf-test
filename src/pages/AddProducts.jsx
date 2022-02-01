import React, { useState, useRef } from 'react'
import FormAddProd from '../components/FormAddProd'
import Navbar from '../components/Navbar'
import { createProducts } from "../redux/actions/products";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
const AddProducts = (props) => {
  let navigate = useNavigate();
  const fileInputHide = useRef(null);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    props.createProducts(productName, price, description, stock, props.auth.token);
    navigate("/");
  };
  return (
    <div>
      <header className="px-32 sticky top-0 bg-white shadow-md mb-8">
        <Navbar
          home="text-yellow-900 font-bold"
          product="text-gray-500"
          cart="text-gray-500"
          history="text-gray-500"
        />
      </header>
      <h1 className="font-bold ml-40 text-2xl underline">Add Product</h1>
      <div className="p-10 mx-40 w-105">
        <FormAddProd setProductName={(e) => setProductName(e.target.value)} setPrice={(e) => setPrice(e.target.value)} setDescription={(e) => setDescription(e.target.value)} setStock={(e) => setStock(e.target.value)}
          onSubmit={onSubmit} />
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  products: state.products
});
const mapDispatchToProps = { createProducts };
export default connect(mapStateToProps, mapDispatchToProps)(AddProducts);
