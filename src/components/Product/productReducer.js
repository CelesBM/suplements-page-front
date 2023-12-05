import { SET_PRODUCTS } from "./productActions";
import { FILTER_PRODUCTS_BY_CATEGORY } from "./productActions";

const initialState = {
  products: [],
  filteredProducts: [], // Nuevo estado para almacenar productos filtrados
};

/*const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
*/

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload, // Inicialmente, los productos filtrados son los mismos que los productos totales
      };
    case FILTER_PRODUCTS_BY_CATEGORY:
      const category = action.payload;
      if (category === "All") {
        return {
          ...state,
          filteredProducts: state.products, // Mostrar todos los productos si la categoría es "Todos los productos"
        };
      } else {
        const filtered = state.products.filter(
          (product) => product.category === category
        );
        return {
          ...state,
          filteredProducts: filtered, // Filtrar productos por la categoría seleccionada
        };
      }
    default:
      return state;
  }
};

export default productReducer;
