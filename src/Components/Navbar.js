import logo from '../img/logocdmx.png'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import { useHistory } from "react-router-dom";

export default function Navbar({type}){
    const history = useHistory();
    const logout = (response) =>{
        window.localStorage.removeItem('token');
        history.push('/');
    }
    return(
        <nav className="navbar bar">
            <div className="container-fluid conter">
                
                    <div className=" col-3 logo">
                    <Link to="/">
                        <img className="img-fluid" src={logo} alt="Logo ciudad de méxico"/>
                        </Link>
                    </div>
                
                <div className="col-8 title h-100">
                    {type === "general" ? 
                    <div className="col-12 title d-flex justify-content-center h-100">
                        <h4>Sistema de registro de ciudadanos</h4>
                    </div> :  
                    <div className="d-flex justify-content-end mr-5">
                        <ul className="nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/logout">
                                    Consultar información
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/logout">
                                    Firmar documento
                                </Link>
                            </li>
                            {type === "ciudadano" ? 
                            <li className="nav-item">
                                <Link className="nav-link" to="/logout">
                                    Acceder como persona moral
                                </Link>
                            </li> :
                            <li className="nav-item">
                                <Link className="nav-link" to="/logout">
                                    Agregar persona física
                                </Link>
                            </li>
                            }
                            <li className="nav-item">
                            <GoogleLogout
                            clientId="1025548408565-f1lq2ji404qtce9r52hnbq38p3qg0a1l.apps.googleusercontent.com"
                            onLogoutSuccess={logout}
                            />
                            </li>
                        </ul>
                    </div>
                    }
                </div>
            </div>
        </nav>
    );
}
