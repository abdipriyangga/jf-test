import Swal from "sweetalert2";
import { http } from "../../helpers/http";

const { REACT_APP_URL: URL } = process.env;

const createProducts = (productName, price, images, description, token) => {
  return async (dispatch) => {
    const form = new URLSearchParams();
    const limitSize = 2 * 1040 * 1040;
    if (images) {
      if (images.size > limitSize) {
        Swal.fire({
          icon: "error",
          title: "Opps!",
          text: "Sorry file too large",
          timer: 2000
        });
      }
    }
    form.append("productName", productName);
    form.append("price", price);
    form.append("images", images);
    form.append("description", description);

    try {
      const { data } = await http(token).post(`${URL}/products`, form.toString());
      dispatch({
        type: "CREATE_PRODUCTS",
        payload: Swal.fire({
          icon: "success",
          title: "Yeay...",
          text: data.message,
          timer: 2000
        })
      });
    }
    catch (err) {
      dispatch({
        type: "CREATE_PRODUCTS_FAILED",
        payload: Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
          timer: 2000
        })
      });
    }
  };
};

const getProducts = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await http(token).get(`${URL}/products`);
      dispatch({
        type: "SET_GET_PRODUCTS",
        payload: {
          products: data.results,
        },

      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
}
const getProductId = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await http().get(`${URL}/products/${id}`);
      dispatch({
        type: "SET_GET_DETAIL_PRODUCTS",
        payload: data.results,

      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
}
const updateProduct = (data, token, id) => {
  return async (dispatch) => {
    const form = new URLSearchParams();
    const limitSize = 2 * 1040 * 1040;
    if (data.images) {
      if (data.images.size > limitSize) {
        Swal.fire({
          icon: "error",
          title: "Opps!",
          text: "Sorry file too large",
          timer: 2000
        });
      }
    }
    form.append("productName", data.productName);
    form.append("price", data.price);
    form.append("images", data.images);
    form.append("description", data.description);

    try {
      const { data: newData } = await http(token).patch(`${URL}/products/${id}`, form.toString());
      dispatch({
        type: "UPDATE_PRODUCTS",
        payload: Swal.fire({
          icon: "success",
          title: "Yeay...",
          text: newData.message,
          timer: 2000
        })
      });
    }
    catch (err) {
      dispatch({
        type: "UPDATE_PRODUCTS_FAILED",
        payload: Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.newData.message,
          timer: 2000
        })
      });
    }
  };
}

const deleteProduct = (token, id) => {
  return async dispatch => {
    try {
      const { data } = await http(token).delete(
        `${URL}/products/${id}`,
      );
      dispatch(getProducts(token));
      dispatch({
        type: 'DELETE_PRODUCT',
        payload: data.results,
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Delete Failed",
        timer: 2000
      })
    }
  };
};
export { createProducts, getProducts, updateProduct, getProductId, deleteProduct };