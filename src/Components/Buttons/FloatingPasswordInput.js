import { ErrorMessage, Field } from 'formik'
import showPassword from '../../Assets/svg/showPassword.svg'
import React from 'react'

const FloatingPasswordInput = ({type,id,name,placeholder}) => {
  return (
      <>
        <div className="relative flex ">
            <Field 
            autoComplete = "off"  
            id={id} 
            name={name} 
            type={type} 
            placeholder={placeholder}
            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />
            <label htmlFor={id} className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">{placeholder}</label>
            <img src={showPassword} className="border-b-2 border-gray-300 " width={24} height={24} />
        </div>
        <ErrorMessage name={name}>
          {
            (errorMsg) => <div className='text-sm text-red-600'>{errorMsg}</div>
          }
        </ErrorMessage>
      </>
  )
}

export default FloatingPasswordInput