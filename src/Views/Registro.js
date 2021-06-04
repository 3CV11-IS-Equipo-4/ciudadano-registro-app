import Layout from '../Components/Layout';
import Form from '../Components/Form';
import { registers } from '../utils/const'

export default function Registro(){

    return(
	<Layout head="Crear cuenta de persona moral" type="general">
		<Form inputsData={registers.ciudadano} styling="success" textBtn="Crear cuenta" type="google">		
	    </Form>
	</Layout>
    );
}