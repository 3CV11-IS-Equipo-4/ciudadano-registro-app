import Button from "./Button";
import useForm from "../hooks/useForm";
import Input from "./Input";
import Select from "./Select";
import Photo from "./Photo";
import { GoogleLogin} from 'react-google-login';
import { api } from '../utils/https';
import {useHistory} from "react-router-dom";

export default function Form({submit, inputsData, textBtn, children, styling, stylingF, stylingI,page,type,islogin}) {
    const history = useHistory();

	const registrar = (response) => {
        console.log(response);
        const body = {...inputs,"google_id_token":response.tokenId};
        api.post('physical_persons',{...body}).then(res => {
            const data = {"google_id_token":response.tokenId};
            api.post('physical_persons/login_google',{...data}
            ).then(({data,status}) =>{
                if (status === 200){
                    window.localStorage.setItem('token',data.key_pp);
                    history.push('/ConsultarInfo');
                    console.log('data',data);
                }
            }).catch(error => {
                console.log("error",error.message);
                history.push('/');
            })
        }).catch(error => {
            console.log("Error",error);
        })
	}

    const loginGoogle = (response) => {
        //console.log("response",response);
        //const data = {"google_id_token":response.qc.id_token};
        const data = {"google_id_token":response.tokenId};
        api.post('physical_persons/login_google',{...data})
            .then(({data,status}) => {
                if (status === 200){
                    window.localStorage.setItem('token',data.key_pp);
                    console.log('status',status);
                    console.log('data',data);
                    // setTimeout(() => history.push('/ConsultarInfo'), [1000]);
                    history.push('/ConsultarInfo');
                }
            }).catch(error => {
                console.log("error",error.message);
                history.push('/');
            })
    }

	const handleLoginFailure = error => {
		console.log("Login Failure ", error);
	}
	
	const handleRequest = () => {
	}
	
	const handleAutoLoadFinished = () => {
	}

    const {
        inputs,
        handleSubmit,
        handleInputs,
        handlePhotos,
    } = useForm(submit,
        {},page
    );

    const selectType = (i, n) => {
        switch(i.inputType){
            case 'select':
                return <Select
                    label={i.label}
                    options={i.items}
                    key={i.name + 'select'}
                    placeholder={i.placeholder}
                    change={handleInputs}
                    required={i.required}
                    value={inputs[i.value]}
                    name={i.name}
                    />
            case 'photos':
                return <Photo
                    label={i.label}
                    key={i.name + 'photo'}
                    required={i.required}
                    name={i.name} 
                    change={handlePhotos}
                />
            default:
                return <Input
                        label={i.label}
                        type={i.type}
                        key={i.name}
                        placeholder={i.placeholder}
                        change={handleInputs}
                        value={inputs[i.value]}
                        required={i.required}
                        name={i.name}
                        stylingI={stylingI}
                    />
        }
    }
    return(
        <form onSubmit={handleSubmit} className="container">
            <div className={stylingF || "d-flex flex-row flex-wrap justify-content-center"}>
                {inputsData ? 
                    inputsData.map((i,index) => 
                    selectType(i,index))
                    : ''
                }
                {type === "general" ?
                    <Button type="submit" styling={styling} text={textBtn}></Button>:
                    <GoogleLogin
                    clientId="1025548408565-f1lq2ji404qtce9r52hnbq38p3qg0a1l.apps.googleusercontent.com"
                    buttonText={islogin ? "Iniciar sesión" : "Registrate"}
                    onSuccess={islogin ? loginGoogle : registrar}
                    onFailure={handleLoginFailure}
                    onRequest={handleRequest}
                    onAutoLoadFinished={handleAutoLoadFinished}
                    />}
                {children}
            </div>
        </form>
    );
};