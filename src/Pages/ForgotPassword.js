import React,{useRef, useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GoogleLoginBtn from "../Components/Buttons/GoogleLoginBtn";
import { Formik,Form } from "formik";
import * as Yup from 'yup';
import FloatingInput from "../Components/Buttons/FloatingInput";
import FloatingPasswordInput from "../Components/Buttons/FloatingPasswordInput";
import TwitterLoginBtn from '../Components/Buttons/TwitterLoginBtn';
import GithubLoginBtn from '../Components/Buttons/GithubLoginBtn';
import { useAuth } from '../Context/AuthContext';
import ErrorToast from '../Components/ErrorToast';
import SuccessToast from '../Components/SuccessToast';

const initialValues = {
    email: '',
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email Address").required("Required"),
})

function ForgotPassword() {
    const {forgotPassword} =useAuth()
    let navigate = useNavigate();

    const errorToastRef = useRef(null)
    const successToastRef = useRef(null)
    const [errorMessage,setErrorMessage] = useState(null)
    const [successMessage,setSuccessMessage] = useState(null)

    async function onSubmit(values) {
        const { email} = values
        try {
            await forgotPassword(email)
            setSuccessMessage("Email to change the password has been sent Successfully!")
            successToastRef.current.show()
            console.log("email has been sent successfully")

        } catch (error) {
            setErrorMessage(error.message)
            errorToastRef.current.show()
            console.log(error)
        }

    }

    return (
        <section>
        <ErrorToast message={errorMessage} ref={errorToastRef} />
        <SuccessToast message={successMessage} ref={successToastRef} />
        <div className="flex min-h-screen overflow-hidden">
        <div className="flex flex-col justify-center flex-1 px-4 py-12  sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="w-full max-w-xl mx-auto lg:w-96">
            <div>
                <Link to = "/" >
                    <img src="https://img.icons8.com/ios-filled/50/000000/circled-left-2.png" className = "mb-6"/>
                </Link>
                <h2 className="font-merriweather mt-6 text-3xl font-bold"> Forgot Password </h2>
            </div>
            <div className="mt-8">
                <div className="mt-6">
                <Formik 
                    initialValues={initialValues}
                    onSubmit= {onSubmit}
                    validationSchema = {validationSchema }
                >
                    <Form autoComplete = "off"  className="divide-y divide-gray-200">
                        <div className=" text-base leading-6 space-y-5 text-gray-700 sm:text-lg sm:leading-7">
                            <FloatingInput id="email" name="email" type="email" placeholder="Email address" />
                        </div>
                        <div className="mt-8">
                            <button type="submit" aria-label="create my account" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full  ">
                                Reset my Password
                            </button>
                        </div>
                    </Form>
                </Formik>
                <p className='text-green-500 font-semibold mt-4 '>{successMessage}</p>
                <Link to = "/signup" className="text-md my-8 flex justify-center">
                        <a href="#" className="font-medium text-blue-400 hover:text-blue-500"> Create a new account? signup </a>
                </Link>
            </div>
            </div>
            </div>
        </div>
        <div className="relative flex-1 hidden w-0 overflow-hidden lg:block">
            <img className="absolute inset-0 object-cover w-full h-full" src="https://source.unsplash.com/P9LTNN1GJqk" alt="cover-image" />
        </div>
        </div>
        </section>
    )
}

export default ForgotPassword