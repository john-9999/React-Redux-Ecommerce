import {useSelector, useDispatch} from "react-redux"
import {useState,useEffect} from 'react'
import {unsetUser} from '../reducers/user/userSlice';//importo el setUser desde el slice
import {useNavigate} from 'react-router-dom'
import Axios from 'axios'

import {ProductsList} from '../components/ProductsList'



export const Home = ()=> {

    //selecciono al user dentro del state
    const user = useSelector(state => state.user);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [products , setProducts] = useState([]);

    useEffect(()=>{
      Axios.get("https://fakestoreapi.com/products")
      .then(response=>{
        setProducts(response.data)
      })
    },[])

    //Función para volver atrás y volver al formulario vacío
    const handleLogout = () =>{
        dispatch(unsetUser());
        navigate("/");//volver al inicio (formulario)
    }

  return (
    <div>
        <h1>Home</h1>
        <p>email: {user.email}</p>
        <p>username: {user.username}</p>
        <p>id: {user.id}</p>
        <hr />
        <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
        <ProductsList products = {products} />
    </div>
  )
}