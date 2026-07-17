import React from "react";
import AuthLayout from "../components/layout/AuthLayout";
import { useLogin } from "../hooks/useLogin";
import FormInput from "../components/ui/FormInput";
import SubmitButton from "../components/ui/SubmitButton";
import { ApiAlert } from "../components/ui/ApiAlert";

function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    isSubmitting,
    apiError,
  } = useLogin();

  return (
    <AuthLayout>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Login page
        </h1>
        <ApiAlert message={apiError} type="error" />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
          <FormInput
            label="Email"
            placeholder="example@email.com"
            register={register("email")}
            error={errors.email}
          />
          <br />
          <FormInput
            label="Password"
            type="password"
            placeholder="******"
            register={register("password")}
            error={errors.password}
          />
          <br />
          <SubmitButton isLoading={isSubmitting} btnText="Login" />
        </form>
      </div>
    </AuthLayout>
  );
}

export default LogIn;
