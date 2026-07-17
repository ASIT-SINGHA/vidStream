import { useSignUp } from "../hooks/useSignUp.js";
import { ApiAlert } from "../components/ui/ApiAlert.jsx";
import FormFileInput from "../components/ui/FormFileInput.jsx";
import FormInput from "../components/ui/FormInput.jsx";
import { FormError } from "../components/ui/FormError.jsx";
import SubmitButton from "../components/ui/SubmitButton.jsx";
import AuthLayout from "../components/layout/AuthLayout.jsx";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    isSubmitting,
    apiError,
  } = useSignUp();

  return (
    <AuthLayout className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Create Account
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
          <ApiAlert message={apiError} type="error" />

          <FormInput
            label="Full Name"
            placeholder="Anik Ghosh"
            error={errors.fullName}
            register={register("fullName")}
          />

          <FormInput
            label="Username"
            placeholder="anikghose"
            error={errors.username}
            register={register("username")}
          />

          <FormInput
            label="Email"
            type="email"
            placeholder="anik@example.com"
            error={errors.email}
            register={register("email")}
          />

          <FormInput
            label="Password"
            type="password"
            placeholder="••••••••"
            error={errors.password}
            register={register("password")}
          />

          <FormFileInput
            type="file"
            label="Profile Picture"
            error={errors.avatar}
            register={register("avatar")}
          />

          <FormFileInput
            type="file"
            label="Cover Image"
            error={errors.coverImage}
            register={register("coverImage")}
          />

          <div className="pt-2">
            <SubmitButton isLoading={isSubmitting} />
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign in
          </a>
        </p>
      </div>
    </AuthLayout>
  );
}
export default SignUp;
