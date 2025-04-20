import { motion } from "framer-motion";
import Note from '../../components/Note/Note';

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
                    className='flex flex-col md:flex-row flex-wrap gap-7 mt-10 items-center'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {[...Array(6)].map((_, i) => (
                        <motion.div key={i} variants={noteVariants}>
                            <Note />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}
