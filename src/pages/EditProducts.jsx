import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { updateProduct, getProductId } from "../redux/actions/products";
import { connect, useDispatch } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import FormAddProd from '../components/FormAddProd';
const EditProducts = (props) => {
  const { detail } = props.products;
  const { id } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    props.getProductId(id);
    setProductName(detail.productName);
    setPrice(detail.price);
    setImages(detail.images);
    setDescription(detail.description);
  }, []);
  console.log("DATA FROM DETAIL: ", detail);
  const updateData = {
    productName,
    price,
    images,
    description,
  };
  const onSubmit = (e) => {
    e.preventDefault();
    props.updateProduct(updateData, props.auth.token, id);
    navigate("/products");
    console.log("data dari pages Formdata: ", updateData);
  };
  useEffect(() => {
    props.updateProduct(updateData, props.auth.token, id);;
  }, []);
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
      <h1 className="p-10">Edit Product</h1>
      <div className="p-10 mx-40 w-105">
        <FormAddProd productName={detail.productName} price={detail.price} images={detail.images} description={detail.description} setProductName={(e) => setProductName(e.target.value)} setPrice={(e) => setPrice(e.target.value)} setImages={(e) => setImages(e.target.files[0].name)} setDescription={(e) => setDescription(e.target.value)} onSubmit={onSubmit} />
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  products: state.products,
  auth: state.auth
});
const mapDispatchToProps = {
  updateProduct,
  getProductId,
};
export default connect(mapStateToProps, mapDispatchToProps)(EditProducts)
