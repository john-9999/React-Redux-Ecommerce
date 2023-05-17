import { useSelector, useDispatch } from "react-redux";
import { addProductToCart, RemoveProductFromCart } from "../reducers/cart/cartSlice";

export const ProductsList = ({ products }) => {
  const dispatch = useDispatch();

//Aquí tendre todos los productos
  const {productsList} = useSelector(state => state.cart)

  const handleAddOrRemoveProduct = (productId) => {
    const product = products.find(product => product.id === productId);//Si encuentras el id del producto que yo seleccione para agregar al carrito
//si buscas en la productsList, productos y uno de esos id coincide con el que seleccioné, quiero que lo elimines. Y sino coincide, agregalo al carrito.   
    if(productsList.find(pdt => pdt.id === productId)){
      dispatch(RemoveProductFromCart(productId));
    } else {
      dispatch(addProductToCart(product))
    }
  };

  return (
    <>
      <h2>Lista de productos</h2>
      <div className="row">
        {
          //Recorre los productos y de un producto devuelve los siguientes datos.
          products.map((product) => {
            return (
              <div key={product.id} className="col-3 mt-3">
                <h4>{product.title}</h4>
                <p>
                  <b>Price: </b>
                  {product.price}
                </p>
                <p>
                  <b>Category: </b>
                  {product.category}
                </p>
                <button
                  className={`btn ${productsList.find(pdt => pdt.id === product.id) ? "btn-danger":"btn-success"}`}
                  onClick={() => handleAddOrRemoveProduct(product.id)}
                >
                  {productsList.find(pdt => pdt.id === product.id)? "Remove" : "Add"} to cart
                </button>
              </div>
            );
          })
        }
      </div>
    </>
  );
};
