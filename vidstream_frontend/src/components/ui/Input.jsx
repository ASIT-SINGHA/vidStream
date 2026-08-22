import { useId } from "react";
import { FormError } from "./FormError";

function Input({
  label,
  error=null,
  type="text",
  register,
  placeholder = "",
  className = "",
  ref,
  ...props
}) {
  let id = useId();
  let isfile = false;
  if (type == "file") isfile = true;

  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        accept={isfile ? "image/*" : undefined}
        id={id}
        {...props}
        placeholder={placeholder}
        {...register}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      />
      {error && <FormError message={error.message} />}
    </div>
  );
}
export default Input;
