import Layout from '../Components/Layout';
import Form from '../Components/Form';
import { registers } from '../utils/const'
import axios from 'axios';
import protect from '../utils/protect';
import payload from '../utils/payload';
import {useState} from 'react';
import { useHistory } from "react-router-dom";

function RegistrarPM(){
	const history = useHistory();
    const path= 'https://cdmx-registro-ciudadano-api.herokuapp.com/';
    
    const [data, setData] = useState(null);
    const [user, setUser] = useState(null);

    const registrar_pm = (inputs) => {
        const token = window.localStorage.getItem('token')
        const p = payload();
        const config = {
            headers:{
               Authorization: `Bearer ${token}` 
            }
        };
        console.log("request",{...config},{...inputs});
		axios.post(path+'moral_persons',{...config},{...inputs})	
            .then(({data, status})=>{
                if(status === 200) {
                    setData(data);
                    setUser(p);
                    console.log("data",data);
                }
            }).catch(error => {
                console.log("error",error);
            });
    };

    return(
	<Layout head="Crear cuenta de persona moral" type="ciudadano">
	    <Form inputsData={registers.personaMoral} styling="success" textBtn="Registrar persona moral" submit={registrar_pm} type="general">

	    </Form>
	</Layout>
    );
}

export default protect(RegistrarPM)