import React, { useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Formik,Form } from "formik";
import * as Yup from 'yup';
import FloatingInput from "../Components/Buttons/FloatingInput";
import FloatingPasswordInput from "../Components/Buttons/FloatingPasswordInput";
import GoogleLoginBtn from "../Components/Buttons/GoogleLoginBtn";
import GithubLoginBtn from "../Components/Buttons/GithubLoginBtn";
import TwitterLoginBtn from "../Components/Buttons/TwitterLoginBtn";

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
        <div className="h-screen md:h-screen w-full    bg-gradient-to-tl from-green-400 to-indigo-900 md:py-16 px-4  ">
            <div className="h-full flex flex-col items-center justify-center">
                <div>
                    {/* add your logo for Desktop */}
                    <h1 className="hidden md:block text-4xl text-white font-semibold" >Firebase & React Authentication Starter</h1>
                </div>

                <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-4 md:mt-16 ">
                    <div>
                        {/* add your logo for mobile */}
                        <h1 className="md:hidden text-2xl text-black text-center font-bold pb-8" >Firebase & React Authentication Starter</h1>
                    </div>
                    <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
                        Register to your account
                    </p>
                    <p className="text-sm mt-4 font-medium leading-none text-gray-500">
                        Already have an account?{" "}
                        <Link to="/" tabIndex={0} role="link" aria-label="Sign up here" className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                            {" "}
                            Login here
                        </Link>
                    </p>
                    {/* social provider login */}
                    <GoogleLoginBtn/>
                    <GithubLoginBtn/>
                    <TwitterLoginBtn/>
                    {/* horizontal line */}
                    <div className="w-full flex items-center justify-between py-5">
                        <hr className="w-full bg-gray-400" />
                        <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                        <hr className="w-full bg-gray-400  " />
                    </div>
                    {/* email password login */}
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
                </div>
            </div>
        </div>
    );
}

export default Signup;
