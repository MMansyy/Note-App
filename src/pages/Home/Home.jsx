import { motion } from "framer-motion";
import Note from '../../components/Note/Note';
import AddButton from "../../components/AddButton/AddButton";
import AddNoteModal from "../../components/Modal/AddModal";
import { useEffect, useState } from "react";
import axios from "axios";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const noteVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};



export default function Home() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [notes, setnotes] = useState([])

    async function getNotes() {
        await axios.get('https://note-sigma-black.vercel.app/api/v1/notes', { headers: { token: '3b8ny__' + localStorage.getItem('token') } })
            .then((res) => {
                console.log(res.data.notes)
                setnotes(res.data.notes)
            })
            .catch((err) => {
                console.log(err.response.data.msg)
            })
    }

    useEffect(() => {
        getNotes()
    }, [])


    return (
        <motion.div
            className='flex flex-col p-6 ml-10'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className='self-start my-6'>
                {/* Search Bar */}
                <form className=" mx-auto">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-2.5 ps-10 px-40 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-black focus:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black" placeholder="Search by title" required />
                    </div>
                </form>
            </div>

            <div className='flex flex-col flex-wrap mt-10'>
                <h1 className='text-6xl text-left font-semibold me-auto'>Notes</h1>

                <motion.div
                    key={notes.length}
                    className='flex flex-col md:flex-row flex-wrap gap-7 mt-10 items-center'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {notes.map((note, index) => (
                        <motion.div key={note.id} variants={noteVariants}>
                            <Note refreshnotes={getNotes} data={note} index={index} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <div className='fixed bottom-10 right-10'>
                <AddButton setModalIsOpen={setModalIsOpen} />
            </div>
            <AddNoteModal refreshnotes={getNotes} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />


        </motion.div>
    );
}
