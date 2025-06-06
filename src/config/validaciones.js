const validate= {
    userName: {
        required: { value: true, message: 'El campo es requerido' },
        minLength: { value: 2, message: 'El nombre de usuario debe ser mayor a 2 carácteres' },
        maxLength: { value: 30, message: 'El nombre de usuario debe ser menos de 30 carácteres' }
    },

    password: {
        required: { value: true, message: 'La contraseña es requerida' },
        minLength: { value: 5, message: 'La contraseña deber ser mayor a 5 carácteres' },
        maxLength: { value: 15, message: 'El contraseña debe ser menor a 20 carácteres' }
    }
}
export { validate };