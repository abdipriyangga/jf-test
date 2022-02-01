import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { updateProduct, getProductId, deleteProduct } from "../redux/actions/products";
import { connect, useDispatch } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import FormAddProd from '../components/FormAddProd';
import Swal from "sweetalert2";
const EditProducts = (props) => {
  const { detail } = props.products;
  const { id } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [productName, setProductName] = useState(detail.productName);
  const [price, setPrice] = useState(detail.price);
  // const [images, setImages] = useState("");
  const [description, setDescription] = useState(detail.description);
  const [stock, setStock] = useState(detail.stock);
  useEffect(() => {
    props.getProductId(id);
    setProductName(detail.productName);
    setPrice(detail.price);
    setDescription(detail.description);
    setStock(detail.stock);
  }, []);

  console.log("DATA FROM DETAIL: ", detail);
  const updateData = {
    productName,
    price,
    description,
    stock
  };

  const formData = (e) => {
    e.preventDefault();
    dispatch(updateProduct(props.auth.token, updateData, id));
    console.log("data dari pages Formdata: ", updateData);
    navigate("/products");
    // setTimeout(() => {
    //   window.location.reload(false);
    // }, 500);
    // console.log('page to reload')
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
      <h1 className="p-10 text-2xl font-bold">Edit Product</h1>
      <div className="p-10 mx-40 w-105">
        <FormAddProd productName={detail.productName} price={detail.price} images={detail.images} description={detail.description} stock={detail.stock} setProductName={(e) => setProductName(e.target.value)} setPrice={(e) => setPrice(e.target.value)} setDescription={(e) => setDescription(e.target.value)} setStock={(e) => setStock(e.target.value)} onSubmit={formData} />
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
  deleteProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(EditProducts)
