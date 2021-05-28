import Layout from '../Components/Layout';
import RowData from '../Components/RowData';
import Table from '../Components/Table';
import {tables} from '../utils/const';

export default function ConsultarInfo(){
    // Variable de prueba
    let type = "persona-moral"
    let data = {
        facha_nacido: '21/06/1999',
        curp: '21/06/1999',
        rfc: '21/06/1999',
        nombre: '21/06/1999',
        primer_apellido: '21/06/1999',
        segundo_apellido: '21/06/1999',
        calle: '21/06/1999',
        num_exterior: '21/06/1999',
        num_interior: '21/06/1999',
        cp: '21/06/1999',
        alcaldia: '21/06/1999',
        colonia: '21/06/1999',
        email: '21/06/1999',
        facebook: '21/06/1999',
        google: '21/06/1999'
    };
    let data_personas = [];

    const aceptar = () => {};

    const denegar = () => {};

    return (
        <Layout type={type}>
            <div className="container  text-start">
                <div className="mb-4 mt-3">
                    <h3 className="mb-3">Datos personales</h3>

                    {type === "ciudadano" ? 
                    <>
                    <RowData label1="Fecha de nacimiento:" data1={data.facha_nacido} label2="CURP:" data2={data.curp} label3="RFC:" data3={data.rfc}/>
                    <RowData label1="Nombre(s):" data1={data.nombre} label2="Primer apellido:" data2={data.primer_apellido} label3="Segundo apellido:" data3={data.segundo_apellido} />
                    </>
                    :<></>}
                    {type === "persona-moral" ? 
                    <RowData label1="RFC:" data1={data.rfc} label2="Denominación social:" data2={data.denominacion} label3="Razón social:" data3={data.razon} />
                    :<></>}
                    <RowData label1="Calle:" data1={data.calle} label2="Número exterior:" data2={data.num_exterior} label3="Número interior:" data3={data.num_interior} />
                    <RowData label1="C.P.:" data1={data.cp} label2="Alcaldia:" data2={data.alcaldia} label3="Colonia:" data3={data.colonia} />
                    
                    <h3 className="mb-3">Datos de la cuenta</h3>
                    {type === "ciudadano" ?
                    <RowData label1="Correo electrónico:" data1={data.email} label2="Asosiado con facebook:" data2={data.facebook} label3="Asosiado con google:" data3={data.google} />
                    :<></>}
                    {type === "persona-moral" ?
                    <>
                    <RowData label1="Correo electrónico:" data1={data.email} label2="RFC del responsable:" data2={data.rfc_resp} label3="CURP del responsable:" data3={data.curp_resp} />
                    <h3 className="mb-3">Personas asociadas</h3>
                    {data_personas ? 
                    <Table cols={tables.consultarInfo} datos={data_personas} aceptar={aceptar} denegar={denegar}></Table>
                    :'No hay personas asociadas'}
                    </>
                    :<></>}
                    
                    
                </div>
            </div>
        </Layout>
    );
}