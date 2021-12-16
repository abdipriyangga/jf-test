import React, { useEffect } from 'react'
import { getProductId, deleteProduct } from "../redux/actions/products";
import { connect, useDispatch } from "react-redux";
import { useParams, useNavigate, Link } from 'react-router-dom';
import Swal from "sweetalert2";
import Navbar from '../components/Navbar'
import { DefaultUser } from '../assets';

const ProductDetail = (props) => {
  const { detail } = props.products;
  const { id } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductId(id));
  }, []);
  console.log("DETAIL PROD: ", detail);
  function refreshPage() {
    navigate(`edit`);
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
    console.log('page to reload')
  }
  console.log("ID: ", id);
  const onDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(props.auth.token, id))
        Swal.fire(
          'Deleted!',
          'Your history has been deleted.',
          'success'
        )
        navigate('/products')
      }
    })
  }
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
      <h1 className='font-bold text-xl underline p-10'>Product Detail</h1>
      <section className="flex flex-row p-20 justify-center items-center space-x-20">
        {/* <img className="w-48 h-48 rounded-md object-cover"
          src={detail.images !== null || undefined ? DefaultUser : detail.images}
          alt="food" /> */}
        <div className="space-y-8">
          <h3 className='font-bold text-lg'>{detail.productName}</h3>
          <h3 className='font-bold text-sm'>{detail.price}</h3>
          <h3 className='font-bold text-sm'>{detail.description}</h3>
          <div className="space-x-10">
            <button onClick={refreshPage} className="bg-indigo-300 hover:bg-indigo-500 text-slate-800 text-sm text-center w-40 mt-3 rounded-md font-semibold">Edit</button>
            <button onClick={onDelete} className="bg-indigo-300 hover:bg-indigo-500 text-slate-800 text-sm text-center w-40 mt-3 rounded-md font-semibold">Delete</button>
          </div>
        </div>
      </section>
    </div>
  )
}
const mapStateToProps = (state) => ({
  products: state.products,
  auth: state.auth
});
const mapDispatchToProps = {
  getProductId,
  deleteProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
