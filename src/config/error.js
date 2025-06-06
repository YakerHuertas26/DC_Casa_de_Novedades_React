// añadir las validaciones del back al hook form
const errorMessages = (error, setError)=>{
    Object.entries(error).forEach(([field, messages]) => {
        setError(field, { message: messages[0] });
    });
}
export { errorMessages };