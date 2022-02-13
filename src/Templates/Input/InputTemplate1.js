import React from 'react'
import { ErrorMessage, Field } from 'formik'

const InputTemplate1 = ({type,id,name,placeholder}) => {
  return (
    <div>
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-neutral-600"> {placeholder} </label>
            <div className="mt-1">
                <Field id={id} 
                name={name} 
                type={type} 
                placeholder={placeholder}
                autoComplete="off"
                className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
            </div>
            <ErrorMessage name={name}>
              {
                (errorMsg) => <p className='text-sm text-red-600'>{errorMsg}</p>
              }
            </ErrorMessage>
        </div>
    </div>
  )
}

export default InputTemplate1