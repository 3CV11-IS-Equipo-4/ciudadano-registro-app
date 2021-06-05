import Layout from '../Components/Layout';
import Card from '../Components/Card-blank';
import Form from '../Components/Form';
import { Link } from 'react-router-dom';

export default function(){

    const login = (inputs) => {};

    return(
        <Layout type="general">
            <div className="row">
                <div className="col-12 col-md-6 p-md-5 pb-5">
                    <Card>
                        <h3>
                            <b>
                            Bienvenido al sistema de registro ciudadano
                            </b>
                        </h3>
                        <p className="mt-5">
                            Administración de cuentas de Persona Física y Persona Moral para realizar trámites de gobierno en la ciudad de México. 
                        </p>
                        <p className="mb-5">
                            Brindamos un servicio de firma electrónica, tanto de Persona Física como Persona Moral.
                        </p>
                    </Card>
                </div>
                <div className="col-12 col-md-6 p-md-5">
                <Card title="Inicia sesión" styling="d-flex flex-column justify-content-center">
                    <Form 
                    submit={login} 
                    styling="success" 
                    textBtn="Acceder"
                    stylingF="d-flex flex-column justify-content-between flex-wrap my-5 mx-5"
                    stylingI="col-md-10"
                    type="google"
                    islogin="login">
                        <Link className="mt-5" to="/registro">Registrate</Link>
                    </Form>
            </Card>
                </div>
            </div>
        </Layout>
    );
}