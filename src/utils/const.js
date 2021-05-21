module.exports = {
    registers: {
        ciudadano: [
            {
                label: 'Nombre(s)',
                name: 'nombres',
                type: 'text',
                placeholder: 'Mario',
                required: true,

            },
            {
                label: 'Primer apellido',
                name: 'primerApellido',
                type: 'text',
                placeholder: '',
                required: true,

            },
            {
                label: 'Segundo apellido',
                name: 'segundoApellido',
                type: 'text',
                placeholder: 'Juarez',
                required: true,

            },
            {
                label: 'CURP',
                name: 'curp',
                type: 'text',
                placeholder: 'lskdkhfhjfs',
                required: true,

            },
            {
                label: 'RFC',
                name: 'rfc',
                type: 'text',
                placeholder: 'rfc',
                required: true,

            },
            {
                label: 'Fecha de nacimiento',
                name: 'fechaNacimiento',
                type: 'date',
                placeholder: '',
                required: true,

            },
            {
                label: 'Calle',
                name: 'calle',
                type: 'text',
                placeholder: 'Mar mediterraneo',
                required: true,

            },
            {
                label: 'Número exterior',
                name: 'numExterior',
                type: 'text',
                placeholder: '54',
                required: true,

            },
            {
                label: 'Número interior',
                name: 'numInterior',
                type: 'text',
                placeholder: '32',
                required: true,

            },
            {
                label: 'Colonia',
                name: 'colonia',
                type: 'text',
                placeholder: 'Anahuac',
                required: true,

            },
            {
                label: 'Código postal',
                name: 'cp',
                type: 'number',
                placeholder: '11320',
                required: true,

            },
            {
                label: 'Alcaldía',
                name: 'alcaldia',
                type: 'text',
                placeholder: 'Miguel Hidalgo',
                required: true,

            },
        ],
        personaMoral: [
            {
                label: 'RFC',
                name: 'rfc',
                type: 'text',
                placeholder: 'rfc',
                required: true,

            },
            {
                label: 'Denominación social',
                name: 'denominacionSocial',
                type: 'text',
                placeholder: 'Denominación social',
                required: true,

            },
            {
                label: 'Razón social',
                name: 'razonSocial',
                type: 'text',
                placeholder: 'Razón social',
                required: true,

            },
            {
                label: 'Calle',
                name: 'calle',
                type: 'text',
                placeholder: 'Mar mediterraneo',
                required: true,

            },
            {
                label: 'Número exterior',
                name: 'numExterior',
                type: 'text',
                placeholder: '54',
                required: true,

            },
            {
                label: 'Número interior',
                name: 'numInterior',
                type: 'text',
                placeholder: '54',
                required: true,

            },
            {
                label: 'Colonia',
                name: 'colonia',
                type: 'text',
                placeholder: 'Anahuac',
                required: true,

            },
            {
                label: 'Código postal',
                name: 'cp',
                type: 'number',
                placeholder: '11320',
                required: true,

            },
            {
                label: 'Alcaldía',
                name: 'alcaldia',
                type: 'text',
                placeholder: 'Miguel Hidalgo',
                required: true,

            },
            {
                label: 'Contraseña',
                name: 'contrasena',
                type: 'password',
                placeholder: '',
                required: true,

            },
            {
                label: 'Confirmar contraseña',
                name: 'contrasena2',
                type: 'password',
                placeholder: '',
                required: true,

            },
        ],
        modificarInfo: [
            {
                label: 'Calle',
                name: 'calle',
                type: 'text',
                placeholder: 'Mar mediterraneo',
                required: true,
            },
            {
                label: 'Número exterior',
                name: 'num_exterior',
                type: 'text',
                placeholder: '200',
                required: true,
            },
            {
                label: 'Número interior',
                name: 'num_interior',
                type: 'text',
                placeholder: '43',
                required: true,
            },
            {
                label: 'Colonia',
                name: 'colonia',
                type: 'text',
                placeholder: 'Anahuac',
                required: true,
            },
            {
                label: 'Codigo Postal',
                name: 'cp',
                type: 'text',
                placeholder: '11320',
                required: true,
            },
            {
                label: 'Alcaldía',
                name: 'alcaldia',
                type: 'text',
                placeholder: 'Miguel Hidalgo',
                required: true,
            },
        ],
        recuperarAcceso: [
            {
                label: 'RFC de persona moral',
                name: 'rfc',
                type: 'text',
                placeholder: 'RFC',
                required: true,
            },
        ],
        agregarPersona: [
            {
                label: 'CURP de persona física',
                name: 'curp',
                type: 'text',
                placeholder: 'CURP',
                required: true,
            },
            {
                label: 'RFC de persona física',
                name: 'rfc',
                type: 'text',
                placeholder: 'RFC',
                required: true,
            },
            {
                label: 'Contraseña',
                name: 'password',
                type: 'password',
                placeholder: '',
                required: true,
            },
        ],
    },
    logins:{
        loginPM:[
            {
                label: 'RFC',
                name: 'rfc',
                type: 'text',
                placeholder: 'rfc',
                requiredd: true,
            },
            {
                label: 'Contraseña',
                name: 'password',
                type: 'password',
                placeholder: '',
                requiredd: true,
            },
        ],
    },
    tables: {
        modificarInfo: [
            {
                Header: 'Calle',
                accessor: 'calle', // it is key in data
            },
            {
                Header: 'Número Interior',
                accessor: 'num_interior',
            },
            {
                Header: 'Número exterior',
                accessor: 'num_exterior',
            },
            {
                Header: 'CP',
                accessor: 'cp',
            },
            {
                Header: 'Alcaldía',
                accessor: 'alcaldia',
            },
            {
                Header: 'Colonia',
                accessor: 'colonia',
            },
        ],
        consultarInfo: [
            {
                Header: 'CURP',
                accessor: 'curp', // it is key in data
            },
            {
                Header: 'RFC',
                accessor: 'rfc',
            },
            {
                Header: 'Nombre(s)',
                accessor: 'nombres',
            },
            {
                Header: 'Primer apellido',
                accessor: 'primer_apellido',
            },
            {
                Header: 'Segundo apellido',
                accessor: 'segundo_apellido',
            },
        ],
    },
};