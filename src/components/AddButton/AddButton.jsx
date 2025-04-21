import React, { useState } from "react";
import { IoIosAdd, IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

// const circleColors = ["#D5A21F", "#FB923C", "#A370D6", "#8BC32D", "#2CB382"];

// const circleVariants = {
//     hidden: { scale: 0, opacity: 0, y: 0 },
//     visible: (i) => ({
//         scale: 1,
//         opacity: 1,
//         y: (i + 1) * -50, // فرق متساوي بين الدواير
//         transition: {
//             delay: i * 0.25, // كل واحدة تتولد من اللي قبلها
//             type: "spring",
//             stiffness: 400,
//             damping: 15,
//         },
//     }),
//     exit: (i) => ({
//         scale: 0,
//         opacity: 0,
//         y: 0,
//         transition: {
//             delay: (circleColors.length - i) * 0.1,
//             duration: 0.6,
//         },
//     }),
// };

function AddButton({ setModalIsOpen }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center justify-center">
            <div className="relative w-12">
                {/* <AnimatePresence>
                    {isOpen &&
                        circleColors.map((color, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={circleVariants}
                                className="absolute w-7 h-7 rounded-full ml-2.5"
                                style={{
                                    backgroundColor: color,
                                    top: "0%", // بداية من قريب الزرار
                                    left: 0,
                                }}
                            />
                        ))}
                </AnimatePresence> */}

                <motion.button
                    onClick={() => { setIsOpen((prev) => !prev); setModalIsOpen(true) }}
                    className="bg-black p-2 cursor-pointer rounded-full text-white relative z-10 w-12 h-12 flex items-center justify-center"
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <IoIosAdd className="text-6xl" />
                </motion.button>
            </div>
        </div>
    );
}

export default AddButton;
