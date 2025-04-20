import React from 'react'
import NoteButton from '../NoteButton/NoteButton'

export default function Note() {
    const NoteColors = ["#FBBF24", "#FB923C", "#A370D6", "#8BC32D", "#2CB382"];
    const randomColor = NoteColors[Math.floor(Math.random() * NoteColors.length)];
    return (
        <div className='flex flex-col md:flex-row flex-wrap items-center '>
            <div className={`flex flex-col justify-between min-h-80 max-w-80 rounded-3xl shadow-lg`} style={{ backgroundColor: randomColor }}>
                <div className='flex flex-col p-6'>
                    <h1 className='text-4xl text-left font-semibold'>Title</h1>
                    <p className='text-base my-4 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, cumque.</p>
                </div>
                <div className='flex justify-end p-6'>
                    <NoteButton />
                </div>
            </div>
        </div>
    )
}
