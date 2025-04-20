import {
    FiEdit,
    FiChevronDown,
    FiTrash,
    FiShare,
    FiPlusSquare,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Modal from "../Modal/Modal";

const NoteButton = () => {
    const [open, setOpen] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div className=" flex items-center justify-center">
            <motion.div animate={open ? "open" : "closed"} className="relative">
                <motion.button
                    onClick={() => setOpen((pv) => !pv)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    variants={iconVariants}
                    className="flex items-center p-3 rounded-full bg-black hover:bg-gray-800 transition-colors"
                >
                    <motion.span className="text-white"><BsThreeDots className='text-3xl' /></motion.span>
                </motion.button>
                < Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
                <motion.ul
                    initial={wrapperVariants.closed}
                    variants={wrapperVariants}
                    style={{ originY: "bottom", translateX: "-50%" }}
                    className="flex flex-col gap-2 p-2 rounded-lg bg-black shadow-xl absolute top-[-180%] left-[50%] w-28 overflow-hidden"
                >
                    <Option setOpen={setOpen} setModalIsOpen={setModalIsOpen} Icon={FiEdit} text="Edit" />
                    <Option setOpen={setOpen} Icon={FiTrash} text="Remove" />
                </motion.ul>
            </motion.div>
        </div>
    );
};

const Option = ({ text, Icon, setOpen, setModalIsOpen }) => {
    return (
        <motion.li
            variants={itemVariants}
            onClick={() => {
                if (text === "Edit") {
                    setModalIsOpen(true);
                }
                setOpen(false)
            }}
            className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-white text-white hover:text-black transition-colors cursor-pointer"
        >
            <motion.span variants={actionIconVariants}>
                <Icon />
            </motion.span>
            <span>{text}</span>
        </motion.li>
    );
};

export default NoteButton;

const wrapperVariants = {
    open: {
        scaleY: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    closed: {
        scaleY: 0,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.1,
        },
    },
};

const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
};

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
        },
    },
    closed: {
        opacity: 0,
        y: 15,
        transition: {
            when: "afterChildren",
        },
    },
};

const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
};