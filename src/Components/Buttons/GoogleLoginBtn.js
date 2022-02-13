import React from 'react'
import google from '../../Assets/svg/google.svg'

const GoogleLoginBtn = () => {
  return (
    <button aria-label="Continue with google" role="button" className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10">
        <img src={google} alt="" width={19} height={20}  />
        <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
    </button>
  )
}

export default GoogleLoginBtn