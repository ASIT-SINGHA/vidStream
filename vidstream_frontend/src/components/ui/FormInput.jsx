import React from "react";
import { FormError } from "./FormError";

function FormInput({label,type,placeholder,register,name,error}) {
  return (
    <div>
      
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className={`w-full px-4 py-2 border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-blue-500"
        }`}
      />
      {error && <FormError message={error.message} />}
    </div>
  );
}

export default FormInput;
