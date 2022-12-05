import { useContext } from "react"
import { FormContext } from "./formContext"

const useFormContext = () => {
    const formData = useContext(FormContext)
    return formData
}
export default useFormContext;