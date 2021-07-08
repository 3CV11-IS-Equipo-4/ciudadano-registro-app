import Layout from '../Components/Layout';
import Card from '../Components/Card-blank';
import Form from '../Components/Form';
import {registers} from '../utils/const'

export default function RecuperarAcces(){
    const access = (inputs) => {};
    return(
        <Layout type="persona-moral">
            <Card className="m-5" title="Recuperar acceso" styling="d-flex flex-wrap flex-row justify-content-center">
                <Form
                inputsData={registers.recuperarAcceso} 
                submit={access} 
                styling="success" 
                textBtn="Recuperar acceso"
                stylingF="d-flex flex-row flex-wrap"
                stylingI="col-md-10"></Form>
            </Card>
        </Layout>
    );
}