import React from 'react'
import { FormError } from './FormError'

function FormFileInput({label,type,name,register,error}) {
  return (
    <div>
       <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
       </label>
      <input
        type={type}
        accept="image/*"  
        {...register}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 file:cursor-pointer hover:file:bg-blue-100 transition-colors"
      />
      {error && <FormError message={error.message} />}
    </div>
  )
}

export default FormFileInput
