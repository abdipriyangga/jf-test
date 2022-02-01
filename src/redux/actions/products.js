import Swal from "sweetalert2";
import { http } from "../../helpers/http";

const { REACT_APP_URL: URL } = process.env;

const createProducts = (productName, price, description, stock, token) => {
  return async (dispatch) => {
    const form = new URLSearchParams();
    // const limitSize = 2 * 1040 * 1040;
    // if (images) {
    //   if (images.size > limitSize) {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Opps!",
    //       text: "Sorry file too large",
    //       timer: 2000
    //     });
    //   }
    // }
    form.append("productName", productName);
    form.append("price", price);
    // form.append("images", images);
    form.append("description", description);
    form.append("stock", stock);

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
const updateProduct = (token, data, id) => {
  return async (dispatch) => {
    const form = new FormData();
    // const limitSize = 2 * 1040 * 1040;
    // if (data.images) {
    //   if (data.images.size > limitSize) {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Opps!",
    //       text: "Sorry file too large",
    //       timer: 2000
    //     });
    //   }
    // }
    try {
      form.append("productName", data.productName);
      form.append("price", data.price);
      // form.append("images", images);
      form.append("description", data.description);
      form.append("stock", data.stock);

      const { data: updateData } = await http(token).patch(`${URL}/products/${id}`, form);
      console.log("FORM", form)
      console.log("updateDATA", updateData)
      dispatch({
        type: "UPDATE_PRODUCTS",
        payload: Swal.fire({
          icon: "success",
          title: "Yeay...",
          text: updateData.message,
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
      // dispatch(getProducts(token));
      console.log('====================================');
      console.log("DELETE ACTION: ", data);
      console.log('====================================');
      dispatch({
        type: 'DELETE_PRODUCTS',
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