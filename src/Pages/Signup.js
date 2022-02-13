import React,{useRef, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GoogleLoginBtn from "../Components/Buttons/GoogleLoginBtn";
import { Formik,Form } from "formik";
import * as Yup from 'yup';
import FloatingInput from "../Components/Buttons/FloatingInput";
import FloatingPasswordInput from "../Components/Buttons/FloatingPasswordInput";
import TwitterLoginBtn from '../Components/Buttons/TwitterLoginBtn';
import GithubLoginBtn from '../Components/Buttons/GithubLoginBtn';

const initialValues = {
    email: '',
    password:'',
    confirmPassword: '',
}

const onSubmit =  values => {
    console.log(values)
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email Address").required("Required"),

    password: Yup.string().min(6,"Password must be 6 charcters at minimum").max(30,"Password is too big!").required("Required"),

    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Passwords don't match!").required("Required"),
})

function Signup() {
   
    return (
        <section>
        <div className="flex min-h-screen overflow-hidden">
        <div className="flex flex-col justify-center flex-1 px-4 py-12  sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="w-full max-w-xl mx-auto lg:w-96">
            <div>
                <Link to = "/" >
                    <img src="https://img.icons8.com/ios-filled/50/000000/circled-left-2.png" className = "mb-6"/>
                </Link>
                <h2 className="font-merriweather mt-6 text-3xl font-bold"> Sign Up </h2>
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
                            <FloatingPasswordInput id="password" name="password" type="password" placeholder="Password" />
                            <FloatingPasswordInput id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm Password" />
                        </div>
                        <div className="mt-8">
                            <button type="submit" aria-label="create my account" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full  ">
                                Create my account
                            </button>
                        </div>
                    </Form>
                </Formik>
                <Link to = "/" className="text-md my-8 flex justify-center">
                        <a href="#" className="font-medium text-blue-400 hover:text-blue-500"> Already have an account? Login </a>
                </Link>
                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-neutral-600"> Or continue with </span>
                    </div>

                </div>
                    <GoogleLoginBtn/>
                    <TwitterLoginBtn/>
                    <GithubLoginBtn/>
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

export default Signup