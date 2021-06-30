import Layout from '../Components/Layout';
import RowData from '../Components/RowData';
import { api } from '../utils/https';
import protect from '../utils/protect';
import payload from '../utils/payload';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function ConsultarInfo(){
    
    const [data, setData] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        const p = payload();
        const config = {
            headers:{
               Authorization: `Bearer ${token}` 
            }
        };
        console.log("p",p);
        api.get('physical_persons/'+p.sub._id,config)
            .then(({data, status})=>{
                if(status === 200) {
                    setData(data);
                    setUser(p);
                    console.log("data",data);
                }
            }).catch(error => {
                console.log("error",error);
            });
    }, []);
    const type = "ciudadano";
    return (
        <Layout type={type}>
            <div className="container  text-start">
                {user ? 
                <div className="mb-4 mt-3">
                <h3 className="mb-3">Datos personales</h3>
                <RowData label1="Fecha de nacimiento:" data1={data.birth_date} label2="CURP:" data2="hola" label3="RFC:" data3="hola"/>
                <RowData label1="Nombre(s):" data1={data.names} label2="Primer apellido:" data2={data.first_surname} label3="Segundo apellido:" data3={data.second_surname} />
                <RowData label1="Calle:" data1={data.addresses[data.actual_address].street} label2="Número exterior:" data2={data.addresses[data.actual_address].external_number} label3="Número interior:" data3={data.addresses[data.actual_address].internal_number} />
                <RowData label1="C.P.:" data1={data.addresses[data.actual_address].postal_code} label2="Alcaldia:" data2={data.addresses[data.actual_address].town} label3="Colonia:" data3={data.addresses[data.actual_address].suburb} />
                <Link className="mt-5" to={{pathname: '/ModificarInfo', state:data.addresses}}>Modificar</Link>
            </div>:
            <></>}
            </div>
        </Layout>
    );
}

export default ConsultarInfo;