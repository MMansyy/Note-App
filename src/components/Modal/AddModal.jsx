import { AnimatePresence, motion } from "framer-motion";
import * as Yup from 'yup';
import { FaTimes } from "react-icons/fa";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

export default function AddNoteModal({ modalIsOpen, setModalIsOpen, refreshnotes }) {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const token = '3b8ny__' + localStorage.getItem('token')

    async function handleSubmit(values) {
        setIsSubmitting(true)
        axios.post('https://note-sigma-black.vercel.app/api/v1/notes', values, { headers: { token } })
            .then((res) => {
                toast.success("Note added successfully!", { position: "top-center", duration: 3000 })
                console.log(res.data)
                refreshnotes()
            }).catch((err) => {
                console.log(err.response.data.msg)
                toast.error(err.response.data.msg, { position: "top-center", duration: 3000 })
            })
            .finally(() => {
                setModalIsOpen(false)
                setIsSubmitting(false)

            })
    }


    const validationSchema = Yup.object({
        title: Yup.string().required("Title is required"),
        content: Yup.string().required("Content is required"),
    });

    return (
        <AnimatePresence>
            {modalIsOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setModalIsOpen(false)}
                    className="bg-black/30 backdrop-blur-sm fixed inset-0 z-50 grid place-items-center overflow-y-auto px-4 py-8"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white text-black p-8 rounded-2xl w-full max-w-xl shadow-2xl relative overflow-hidden"
                    >
                        <motion.button
                            onClick={() => setModalIsOpen(false)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 transition rounded-full"
                        >
                            <FaTimes className="h-4 w-4 text-gray-600" />
                        </motion.button>

                        <h2 className="text-2xl font-bold mb-6 text-center">Add New Note</h2>

                        <Formik
                            initialValues={{ title: "", content: "" }}
                            validationSchema={validationSchema}
                            onSubmit={(values, { resetForm }) => {
                                handleSubmit(values).then(() => {
                                });
                            }}
                        >
                            <Form className="space-y-6">
                                <div>
                                    <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-1">Title</label>
                                    <Field
                                        type="text"
                                        name="title"
                                        id="title"
                                        placeholder="Enter your title"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                    <ErrorMessage name="title" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                <div>
                                    <label htmlFor="content" className="block text-sm font-semibold text-gray-700 mb-1">Content</label>
                                    <Field
                                        as="textarea"
                                        name="content"
                                        id="content"
                                        placeholder="Write something..."
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black h-36 resize-none"
                                    />
                                    <ErrorMessage name="content" component="div" className="text-red-500 text-sm mt-1" />
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                                    >
                                        {isSubmitting ? "Adding..." : "Add Note"}
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
