import React, { useEffect } from 'react'
import CardListProduct from '../components/CardListProduct'
import Navbar from '../components/Navbar'
import { connect, useDispatch } from "react-redux";
import { getProducts, deleteProduct } from '../redux/actions/products';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from "sweetalert2";
const { REACT_APP_URL: URL } = process.env;
const MyProducts = (props) => {
  const { data } = props.products;
  let navigate = useNavigate();
  const dispatch = useDispatch();
  console.log('data class redux: ', data);
  useEffect(() => {
    props.getProducts(props.auth.token);
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
      <h1 className="font-bold ml-40 text-2xl underline">My Products</h1>

      <div className="p-20 space-y-5">
        {data.map((product) => {
          return (
            <>
              <CardListProduct key={product.id} img={`${URL}${product.images}`} name={product.productName} price={product.price} desc={product.description} stock={product.stock} toEdit={`${product.id}`} toDelete={`${product.id}`} />
            </>
          )
        })}
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  products: state.products,
});
const mapDispatchToProps = {
  getProducts,
  deleteProduct
};
export default connect(mapStateToProps, mapDispatchToProps)(MyProducts)
