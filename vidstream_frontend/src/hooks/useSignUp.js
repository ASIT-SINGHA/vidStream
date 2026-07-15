import { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSignUpSchema } from "../utils/validation.js";
import { registerUser } from "../services/authService";

export function useSignUp() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(userSignUpSchema),
  });

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    setApiError("");

    try {
      await registerUser(formData);
      navigate("/login");
    } catch (error) {
      setApiError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    ...form,
    onSubmit,
    isSubmitting,
    apiError,
  };
}
