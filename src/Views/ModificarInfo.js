import Layout from '../Components/Layout';
import Table from '../Components/Table';
import Form from '../Components/Form';
import {tables} from '../utils/const';
import {registers} from '../utils/const';

export default function ModificarInfo(){
    let type = "ciudadano";
    let address = [];
    let aceptar = () => {};
    let denegar = () => {};
    return (
        <Layout type={type} head={type === "ciudadano" ? "Modificar información de ciudadano":"Modificar información de persona moral"}>
            <>
            <Table cols={tables.modificarInfo} datos={address} aceptar={aceptar} denegar={denegar}></Table>
            <Form inputsData={registers.modificarInfo} styling="success" textBtn="Modificar Información"></Form>
            </>
        </Layout>
    );
}