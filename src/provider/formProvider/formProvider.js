import { useState } from "react";
import { FormContext } from "./formContext";

const FormProvider = ({ children }) => {
    const [initialValue, setInitialValue] = useState({
        email: "",
        password: "",
        city: "",
        gender: "",
        clicked:""

    });
    const [showValue, setShowValue] = useState(false)

    const onSubmits = (event, value) => {
        event.preventDefault();
        setShowValue(true);
        alert("Form Submited");
    };

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);


        const { name, value } = event.target;

        setInitialValue((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        });
    };

    const handleReset = () => {
        setShowValue(false)
        setInitialValue({
            email: '',
            password: '',
            city: '',
            gender: '',
            clicked:''
        })
    }
    return (
        <FormContext.Provider value={{ setInitialValue, initialValue, onSubmits, inputEvent, handleReset, setShowValue, showValue }}>
            {children}
        </FormContext.Provider>
    )
}
export default FormProvider;