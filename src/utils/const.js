module.exports = {
    registers: {
        ciudadano: [
            {
                label: 'Nombre(s)',
                name: 'nombres',
                type: 'text',
                placeholder: 'Mario',
                require: true,

            },
            {
                label: 'Primer apellido',
                name: 'primerApellido',
                type: 'text',
                placeholder: '',
                require: true,

            },
            {
                label: 'Segundo apellido',
                name: 'segundoApellido',
                type: 'text',
                placeholder: 'Juarez',
                require: true,

            },
            {
                label: 'CURP',
                name: 'curp',
                type: 'text',
                placeholder: 'lskdkhfhjfs',
                require: true,

            },
            {
                label: 'RFC',
                name: 'rfc',
                type: 'text',
                placeholder: 'rfc',
                require: true,

            },
            {
                label: 'Fecha de nacimiento',
                name: 'fechaNacimiento',
                type: 'date',
                placeholder: '',
                require: true,

            },
            {
                label: 'Calle',
                name: 'calle',
                type: 'text',
                placeholder: 'Mar mediterraneo',
                require: true,

            },
            {
                label: 'Número exterior',
                name: 'numExterior',
                type: 'text',
                placeholder: '54',
                require: true,

            },
            {
                label: 'Número interior',
                name: 'numInterior',
                type: 'text',
                placeholder: '32',
                require: true,

            },
            {
                label: 'Colonia',
                name: 'colonia',
                type: 'text',
                placeholder: 'Anahuac',
                require: true,

            },
            {
                label: 'Código postal',
                name: 'cp',
                type: 'number',
                placeholder: '11320',
                require: true,

            },
            {
                label: 'Alcaldía',
                name: 'alcaldia',
                type: 'text',
                placeholder: 'Miguel Hidalgo',
                require: true,

            },
        ],
        personaMoral: [
            {
                label: 'RFC',
                name: 'rfc',
                type: 'text',
                placeholder: 'rfc',
                require: true,

            },
            {
                label: 'Denominación social',
                name: 'denominacionSocial',
                type: 'text',
                placeholder: 'Denominación social',
                require: true,

            },
            {
                label: 'Razón social',
                name: 'razonSocial',
                type: 'text',
                placeholder: 'Razón social',
                require: true,

            },
            {
                label: 'Calle',
                name: 'calle',
                type: 'text',
                placeholder: 'Mar mediterraneo',
                require: true,

            },
            {
                label: 'Número exterior',
                name: 'numExterior',
                type: 'text',
                placeholder: '54',
                require: true,

            },
            {
                label: 'Número interior',
                name: 'numInterior',
                type: 'text',
                placeholder: '54',
                require: true,

            },
            {
                label: 'Colonia',
                name: 'colonia',
                type: 'text',
                placeholder: 'Anahuac',
                require: true,

            },
            {
                label: 'Código postal',
                name: 'cp',
                type: 'number',
                placeholder: '11320',
                require: true,

            },
            {
                label: 'Alcaldía',
                name: 'alcaldia',
                type: 'text',
                placeholder: 'Miguel Hidalgo',
                require: true,

            },
            {
                label: 'Contraseña',
                name: 'contrasena',
                type: 'password',
                placeholder: '',
                require: true,

            },
            {
                label: 'Confirmar contraseña',
                name: 'contrasena2',
                type: 'password',
                placeholder: '',
                require: true,

            },
        ],
    },
};