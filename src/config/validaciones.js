const validate= {
    name:{
        required: { value: true, message: 'El campo es requerido' },
        minLength: { value: 4, message: 'El nombre debe ser mayor a 2 carácteres' },
        maxLength: { value: 30, message: 'El nombre debe ser menor a 30 carácteres' }
    },
    userName: {
        required: { value: true, message: 'El campo es requerido' },
        minLength: { value: 2, message: 'El nombre de usuario debe ser mayor a 2 carácteres' },
        maxLength: { value: 30, message: 'El nombre de usuario debe ser menos de 30 carácteres' }
    },
    email: {
        required: { value: true, message: 'El campo es requerido' },
        pattern: { value:/^[a-zA-Z0-9._%+-]+@gmail\.com$/, message: 'El correo electrónico no es válido (gmail.com)' }
    },
    keyWord: {
        required: { value: true, message: 'El campo es requerido' },
        minLength: { value: 2, message: 'La palabra clave debe ser mayor a 2 carácteres' },
        maxLength: { value: 30, message: 'La palabra clave debe ser menor a 30 carácteres' }
    },
    password: {
        required: { value: true, message: 'La contraseña es requerida' },
        minLength: { value: 5, message: 'La contraseña deber ser mayor a 5 carácteres' },
        maxLength: { value: 15, message: 'El contraseña debe ser menor a 20 carácteres' }
    },
    password_confirmation: {
        required: { value: true, message: 'La confirmación de contraseña es requerida' },
        validate: (value, { password }) => value === password || 'Las contraseñas no coinciden'
    },
    // keyWordConfim: {
    //     required: { value: true, message: 'El campo es requerido' },
    // },
}
export { validate };