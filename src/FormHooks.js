import {useState} from "react";

function useForm(){
    const [values, setValues] = useState({});
    
    function handleChange(e){
        const auxValues = {...values};
        auxValues[e.target.name] = e.target.value;
        setValues(auxValues)
    }

    const handleSubmit = callback => event => {
        event.preventDefault();
        callback();
    }

    return [{values}, handleChange, handleSubmit]
}

export default useForm;