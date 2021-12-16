const initialState = {
  data: [],
  detail: {},
  sccMsg: '',
  errMsg: '',
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PRODUCTS": {
      return {
        ...state,
        sccMsg: action.payload
      };
    }
    case "CREATE_PRODUCTS_FAILED": {
      return {
        ...state,
        errMsg: action.payload
      };
    }
    case "SET_GET_PRODUCTS": {
      return {
        ...state,
        data: action.payload.products,
      };
    }
    case "SET_GET_DETAIL_PRODUCTS": {
      return {
        ...state,
        detail: action.payload,
      };
    }
    case "UPDATE_PRODUCTS": {
      return {
        ...state,
        sccMsg: action.payload
      };
    }
    case "UPDATE_PRODUCTS_FAILED": {
      return {
        ...state,
        detail: action.payload,
        errMsg: action.payload
      };
    }
    case "DELETE_PRODUCTS": {
      return {
        ...state,
        sccMsg: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default products;