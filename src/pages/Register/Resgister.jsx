import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function Register() {
    const [isSubmitting, setIsSubmitting] = useState(false);


    const navigate = useNavigate()

    async function handleSubmit(values) {
        setIsSubmitting(true)
        await axios.post('https://note-sigma-black.vercel.app/api/v1/users/signUp', values)
            .then((res) => {
                console.log(res.data)
                toast.success("Registered successfully!", { position: "top-center", duration: 3000 })
                navigate('/login')
            })
            .catch((err) => {
                console.log(err.response.data.msg)
                toast.error(err.response.data.msg, { position: "top-center", duration: 3000 })
            })
            .finally(() => {
                setIsSubmitting(false)
            })
    }

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const inputItem = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().min(6, "At least 6 characters").required("Password is required"),
        age: Yup.number().min(1, "Age must be positive").required("Age is required"),
        phone: Yup.string().required("Phone number is required"),
    });

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
            <motion.div
                className="bg-white shadow-2xl rounded-2xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Left side - Form */}
                <motion.div
                    className="w-full md:w-1/2 p-8"
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-black mb-6">Hello There ..!</h2>

                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            password: "",
                            age: "",
                            phone: "",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { resetForm }) => {
                            handleSubmit(values).then(() => {
                                resetForm();
                            });
                        }}
                    >
                        {() => (
                            <Form>
                                <motion.div
                                    variants={container}
                                    initial="hidden"
                                    animate="show"
                                    className="space-y-4"
                                >
                                    {[
                                        { label: "name", type: "text", name: "name" },
                                        { label: "Email", type: "email", name: "email" },
                                        { label: "Password", type: "password", name: "password" },
                                        { label: "Age", type: "number", name: "age" },
                                        { label: "Phone Number", type: "tel", name: "phone" },
                                    ].map(({ label, type, name }) => (
                                        <motion.div key={name} variants={inputItem}>
                                            <label className="block text-black text-sm font-bold mb-1" htmlFor={name}>
                                                {label}
                                            </label>
                                            <Field
                                                type={type}
                                                id={name}
                                                name={name}
                                                placeholder={`Enter your ${label.toLowerCase()}`}
                                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black text-black bg-white"
                                            />
                                            <ErrorMessage
                                                name={name}
                                                component="div"
                                                className="text-sm text-red-500 mt-1"
                                            />
                                        </motion.div>
                                    ))}
                                    <motion.div variants={inputItem} className="text-left mt-2 text-sm text-gray-600">
                                        Alreay have an account?{" "}
                                        <Link to="/login" className="text-black underline  hover:text-gray-800 transition-all">
                                            Login here
                                        </Link>
                                    </motion.div>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-300 ${isSubmitting
                                            ? "bg-gray-400 cursor-not-allowed text-white"
                                            : "bg-black hover:bg-gray-800 text-white"
                                            }`}
                                    >
                                        {isSubmitting ? "Registering ..." : "Register"}
                                    </motion.button>
                                </motion.div>
                            </Form>
                        )}
                    </Formik>
                </motion.div>

                {/* Right side - Branding */}
                <motion.div
                    className="hidden md:flex w-full md:w-1/2 bg-black text-white items-center justify-center p-8"
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <motion.h1
                        className="text-5xl font-bold cursor-pointer"
                        initial={{ scale: 1 }}
                        whileHover={{
                            scale: 1.1,
                            rotate: [-2, 2, -1, 1, 0],
                            transition: {
                                duration: 0.6,
                                ease: "easeInOut",
                            },
                        }}
                        whileTap={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        Docket
                    </motion.h1>
                </motion.div>
            </motion.div>
        </div>
    );
}
