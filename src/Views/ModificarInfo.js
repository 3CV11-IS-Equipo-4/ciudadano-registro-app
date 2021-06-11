import Layout from '../Components/Layout';
import Table from '../Components/Table';
import Form from '../Components/Form';
import {tables} from '../utils/const';
import {registers} from '../utils/const';
import { api } from '../utils/https';
import protect from '../utils/protect';
import payload from '../utils/payload';
import {useHistory} from "react-router-dom";
import { useLocation } from 'react-router-dom';

function ModificarInfo(){
    const history = useHistory();
    const addresses = useLocation().state;
            
    const type = "ciudadano";

    const aceptar = (inputs) => {
        const token = window.localStorage.getItem('token')
        const p = payload();
        const config = {
            headers:{
                Authorization: `Bearer ${token}` 
            }
        };
        console.log("inputs",inputs);
        const body = {"is_new_direction":false,"previous_new_direction":parseInt(inputs.id)};
        api.patch('physical_persons/'+p.sub._id,{...body},config)
        .then(({status}) => {
            if (status === 200){
                history.push('/ConsultarInfo');
            }
        })
        .catch(error => {
            alert('Lo sentimos, ha ocurrido un error al cambiar tu información');
        });
    };
    
    let denegar = () => {};

    const modificar = (inputs) => {
        const token = window.localStorage.getItem('token')
        const p = payload();
        const config = {
            headers:{
                Authorization: `Bearer ${token}` 
            }
        };
        const body = {"is_new_direction":true,"previous_new_direction":0,...inputs};
        api.patch('physical_persons/'+p.sub._id,{...body},config)
        .then(({status}) => {
            if (status === 200){
                history.push('/ConsultarInfo');
            }
        })
        .catch(error => {
            alert('Lo sentimos, ha ocurrido un error al cambiar tu información');
        });
    };
    return (
        <Layout type={type} head="Modificar información de ciudadano">
            <>
            <Table cols={tables.modificarInfo} datos={addresses} aceptar={aceptar} denegar={denegar}></Table>
            <Form inputsData={registers.modificarInfo} styling="success" textBtn="Modificar Información" type="general" submit={modificar}></Form>
            </>
        </Layout>
    );
}

export default protect(ModificarInfo)