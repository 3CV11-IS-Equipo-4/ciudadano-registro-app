module.exports = {
    registers: {
        ciudadano: [
            {
                label: 'Nombre(s)',
                name: 'names',
                type: 'text',
                placeholder: 'Mario',
                required: true,

            },
            {
                label: 'Primer apellido',
                name: 'first_surname',
                type: 'text',
                placeholder: '',
                required: true,

            },
            {
                label: 'Segundo apellido',
                name: 'second_surname',
                type: 'text',
                placeholder: 'Juarez',
                required: true,

            },
            {
                label: 'CURP',
                name: 'CURP',
                type: 'text',
                placeholder: 'lskdkhfhjfs',
                required: true,

            },
            {
                label: 'RFC',
                name: 'RFC',
                type: 'text',
                placeholder: 'rfc',
                required: true,

            },
            {
                label: 'Fecha de nacimiento',
                name: 'birth_date',
                type: 'date',
                placeholder: '',
                required: true,

            },
            {
                label: 'Calle',
                name: 'street',
                type: 'text',
                placeholder: 'Mar mediterraneo',
                required: true,

            },
            {
                label: 'Número exterior',
                name: 'external_number',
                type: 'text',
                placeholder: '54',
                required: true,

            },
            {
                label: 'Número interior',
                name: 'internal_number',
                type: 'text',
                placeholder: '32',
                required: true,

            },
            {
                label: 'Colonia',
                name: 'suburb',
                type: 'text',
                placeholder: 'Anahuac',
                required: true,

            },
            {
                label: 'Código postal',
                name: 'postal_code',
                type: 'number',
                placeholder: '11320',
                required: true,

            },
            {
                label: 'Alcaldía',
                name: 'town',
                type: 'text',
                placeholder: 'Miguel Hidalgo',
                required: true,

            },
        ],
        personaMoral: [
            {
                label: 'RFC',
                name: 'RFC',
                type: 'text',
                placeholder: 'rfc',
                required: true,

            },
            {
                label: 'Denominación social',
                name: 'business_name',
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
                name: 'street',
                type: 'text',
                placeholder: 'Mar mediterraneo',
                required: true,

            },
            {
                label: 'Número exterior',
                name: 'external_number',
                type: 'text',
                placeholder: '54',
                required: true,

            },
            {
                label: 'Número interior',
                name: 'internal_number',
                type: 'text',
                placeholder: '54',
                required: true,

            },
            {
                label: 'Colonia',
                name: 'suburb',
                type: 'text',
                placeholder: 'Anahuac',
                required: true,

            },
            {
                label: 'Código postal',
                name: 'postal_code',
                type: 'number',
                placeholder: '11320',
                required: true,

            },
            {
                label: 'Alcaldía',
                name: 'town',
                type: 'text',
                placeholder: 'Miguel Hidalgo',
                required: true,

            },
        ],
        modificarInfo: [
            {
                label: 'Calle',
                name: 'street',
                type: 'text',
                placeholder: 'Mar mediterraneo',
                required: true,
            },
            {
                label: 'Número exterior',
                name: 'external_number',
                type: 'text',
                placeholder: '200',
                required: true,
            },
            {
                label: 'Número interior',
                name: 'internal_number',
                type: 'text',
                placeholder: '43',
                required: true,
            },
            {
                label: 'Colonia',
                name: 'suburb',
                type: 'text',
                placeholder: 'Anahuac',
                required: true,
            },
            {
                label: 'Codigo Postal',
                name: 'postal_code',
                type: 'text',
                placeholder: '11320',
                required: true,
            },
            {
                label: 'Alcaldía',
                name: 'town',
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
                name: 'CURP_physical_person',
                type: 'text',
                placeholder: 'CURP',
                required: true,
            },
            {
                label: 'RFC de persona física',
                name: 'RFC_physical_person',
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