import Layout from '../Components/Layout';
import Form from '../Components/Form';
import {registers} from '../utils/const';

export default function AgregarPersona(){
    return (
        <Layout type="persona-moral" head="Asociar una persona física">
            <Form inputsData={registers.agregarPersona} styling="success" textBtn="Agregar persona">
	        </Form>
        </Layout>
    );
}