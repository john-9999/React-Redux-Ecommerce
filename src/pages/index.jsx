import {useRef} from 'react'; //Nos permite pasar una referencia de un elemento
import Axios from 'axios'
import {useDispatch} from 'react-redux'//importo el dispatch
import {setUser} from '../reducers/user/userSlice';//importo el setUser desde el slice
import {useNavigate} from 'react-router-dom'

export const Index = ()=> {

    const emailField = useRef(null); //Nos permite pasar una referencia de un elemento. Al inicio es null y cuándo se renderice el componente html se mostrará su valor.
    const phoneField = useRef(null); //Nos permite pasar una referencia de un elemento. Al inicio es null y cuándo se renderice el componente html se mostrará su valor.

    const dispatch = useDispatch()//defino el dispatch
    const navigate = useNavigate()

    const handleSubmit = e =>{
        e.preventDefault();
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response =>{//Respuesta de la API
            const users = response.data;//obtengo todos los users
            const userToLog = users.find(user => user.email === emailField.current.value);//Busco por email (de ese elemento seleccionado, dame el valor actual)
            console.log(users)

            if(userToLog){
                if(userToLog.phone === phoneField.current.value) {//busco por phone (de ese elemento seleccionado, dame el valor actual)
                    console.log("credenciales válidas")
                    dispatch(setUser({//disparo sus datos en el estado de redux
                        email:userToLog.email,
                        username:userToLog.username,
                        id: userToLog.id,
                    }))
                    //Una vez el usuario se haya logeado lo redirigimos a la siguiente página.
                    navigate("/home");
                }
            }
        
        })
    }

  return (
    <div className="row justify-context-center">
        <div className="col-6">
            <h2 className="mb-4">Login Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" ref={emailField} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="phone" className="form-control" ref={phoneField}/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
  )
}

