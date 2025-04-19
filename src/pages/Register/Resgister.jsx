import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Register() {
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
        username: Yup.string().required("Username is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().min(6, "At least 6 characters").required("Password is required"),
        age: Yup.number().min(1, "Age must be positive").required("Age is required"),
        phoneNumber: Yup.string().required("Phone number is required"),
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
                            username: "",
                            email: "",
                            password: "",
                            age: "",
                            phoneNumber: "",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { resetForm }) => {
                            alert("Form Submitted!");
                            console.log(values);
                            resetForm();
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
                                        { label: "Username", type: "text", name: "username" },
                                        { label: "Email", type: "email", name: "email" },
                                        { label: "Password", type: "password", name: "password" },
                                        { label: "Age", type: "number", name: "age" },
                                        { label: "Phone Number", type: "tel", name: "phoneNumber" },
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
                                        className="w-full bg-black hover:bg-gray-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                                    >
                                        Submit
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
