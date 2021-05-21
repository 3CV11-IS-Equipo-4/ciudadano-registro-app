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
};