import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { loginUserSchame } from "../utils/validation";
import { loginUser } from "../services/authService";
import useMyStore from "../stores/authStore";


export function useLogin() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState(false);
  const navigate = useNavigate();
 

  const form = useForm({
    resolver: zodResolver(loginUserSchame),
  });

  const onSubmit = async (formData) => {

  //  const myState = useMyStore();
  //  console.log(myState);
   

    setIsSubmitting(true);
    setApiError("");

    try {
     const userobj = await loginUser(formData);
      console.log(userobj?.data?.data);
      
      navigate("/");
    } catch (error) {
      setApiError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    ...form,
    isSubmitting,
    apiError,
    onSubmit,
  };
}
