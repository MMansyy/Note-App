import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const togglePassword = () => setShowPassword((prev) => !prev);

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
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().min(6, "At least 6 characters").required("Password is required"),
    });

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
            <motion.div
                className="bg-white shadow-2xl rounded-2xl flex flex-col md:flex-row-reverse w-full max-w-4xl overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Left Side - Login Form */}
                <motion.div
                    className="w-full md:w-1/2 p-8"
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-black mb-6">Welcome Back 👋</h2>

                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { resetForm }) => {
                            setIsSubmitting(true);
                            setTimeout(() => {
                                alert("Logged in successfully!");
                                console.log(values);
                                resetForm();
                                setIsSubmitting(false);
                            }, 2000);
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
                                    {/* Email */}
                                    <motion.div variants={inputItem}>
                                        <label className="block text-black text-sm font-bold mb-1" htmlFor="email">
                                            Email
                                        </label>
                                        <Field
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black text-black bg-white"
                                        />
                                        <ErrorMessage name="email" component="div" className="text-sm text-red-500 mt-1" />
                                    </motion.div>

                                    {/* Password */}
                                    <motion.div variants={inputItem}>
                                        <label className="block text-black text-sm font-bold mb-1" htmlFor="password">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <Field
                                                type={showPassword ? "text" : "password"}
                                                id="password"
                                                name="password"
                                                placeholder="Enter your password"
                                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black text-black bg-white"
                                            />
                                            <span
                                                onClick={togglePassword}
                                                className="absolute right-3 top-2.5 cursor-pointer text-gray-500 text-sm select-none"
                                            >
                                                {showPassword ? "Hide" : "Show"}
                                            </span>
                                        </div>
                                        <ErrorMessage name="password" component="div" className="text-sm text-red-500 mt-1" />
                                    </motion.div>

                                    {/* Submit */}
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
                                        {isSubmitting ? "Logging in..." : "Login"}
                                    </motion.button>

                                    {/* Register Link */}
                                    <motion.div variants={inputItem} className="text-center mt-2 text-sm text-gray-600">
                                        Don't have an account?{" "}
                                        <Link to="/register" className="text-black underline hover:text-gray-800 transition-all">
                                            Register here
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </Form>
                        )}
                    </Formik>
                </motion.div>

                {/* Right Side - Branding */}
                <motion.div
                    className="hidden md:flex w-full md:w-1/2 bg-black text-white items-center justify-center p-8"
                    initial={{ x: -70, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <motion.h1
                        className="text-5xl font-bold cursor-pointer"
                        initial={{ scale: 1 }}
                        whileHover={{
                            scale: 1.1,
                            rotate: [-2, 2, -1, 1, 0],
                            transition: { duration: 0.6, ease: "easeInOut" },
                        }}
                    >
                        Docket
                    </motion.h1>
                </motion.div>
            </motion.div>
        </div>
    );
}
