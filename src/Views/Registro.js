import Layout from '../Components/Layout';
import Form from '../Components/Form';
import { useParams } from 'react-router-dom';
import { registers } from '../utils/const'

export default function Registro(){

	//let { type } = useParams();
	let type = "ciudadano";

    return(
	<Layout head={type === "ciudadano" ? "Crear cuenta de persona moral" : "Crear cuenta de ciudadano"} type={type}>
	    <Form inputsData={type === "ciudadano" ? registers.personaMoral : registers.ciudadano } styling="success" textBtn="Crear cuenta">
	    </Form>
	</Layout>
    );
}