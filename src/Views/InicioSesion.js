import Layout from '../Components/Layout';
import Card from '../Components/Card-blank';
import Button from '../Components/Button';
import Form from '../Components/Form';
import {logins} from '../utils/const';

export default function(){

    const login = (inputs) => {};

    return(
        <Layout type="general">
            <Card className="m-5" title="Inicia sesión" styling="d-flex flex-wrap flex-row justify-content-center">
                    <Form 
                    inputsData={logins.loginPM} 
                    submit={login} 
                    styling="success" 
                    textBtn="Acceder"
                    stylingF="d-flex flex-row flex-wrap"
                    stylingI="col-md-10"
                    type="google"
                    islogin="login">
                    </Form>
            </Card>
        </Layout>
    );
}