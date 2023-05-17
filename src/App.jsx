import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

//components
import { Index } from "./pages/index.jsx";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

function App() {
  const { totalCount } = useSelector((state) => state.cart);

  return (
    <div className="container">
      <div className="d-flex py-4">
        <Link className="btn btn-info m-2" to="/">
          Login
        </Link>
        <Link className="btn btn-info m-2" to="/home">
          Home
        </Link>

        <div className="ms-auto">
          <Link className="btn btn-primary position-relative" to="/cart">
            Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalCount}
              <span className="visually-hidden">Products in cart</span>
            </span>
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Index></Index>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
