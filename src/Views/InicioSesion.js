import Layout from '../Components/Layout';
import Card from '../Components/Card-blank';
import Button from '../Components/Button';
import Form from '../Components/Form';
import {logins} from '../utils/const';

export default function(){

    let type = "ciudadano";
    const login = (inputs) => {};

    return(
        <Layout type={type}>
            <Card className="m-5" title="Inicia sesión" styling="d-flex flex-wrap flex-row justify-content-center">
                    {type === "general" ?
                    <>
                    <Button type="submit" styling="success" text="Iniciar sesión Google"></Button>
                    <Button type="submit" styling="success" text="Iniciar sesión Facebook"></Button>
                    </>
                    :<></>}
                    {type === "ciudadano" ?
                    <>
                    <Form 
                    inputsData={logins.loginPM} 
                    submit={login} 
                    styling="success" 
                    textBtn="Acceder"
                    stylingF="d-flex flex-row flex-wrap"
                    stylingI="col-md-10">
                    </Form>
                    </>
                    :<></>}
            </Card>
        </Layout>
    );
}