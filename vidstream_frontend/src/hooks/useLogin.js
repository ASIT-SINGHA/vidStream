import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router"
import { loginUserSchame } from "../utils/validation";
import { loginUser } from "../services/authService";

export function useLogin(){
    const [isSubmitting,setIsSubmitting]=useState(false)
    const [apiError,setApiError]=useState(false)
    const navigate = useNavigate();

    const form =useForm({
        resolver:zodResolver(loginUserSchame)
    })

const onSubmit =async (formData)=>{
    setIsSubmitting(true)
    setApiError("")

    try {
        await loginUser(formData)
        navigate("/")
    } catch (error) {
        setApiError(error.message)
    } finally{
        setIsSubmitting(false)
    }
}

    return{
        ...form,
        isSubmitting,
        apiError,
        onSubmit
    }
}

