import React from 'react'
import NoteButton from '../NoteButton/NoteButton'

export default function Note({ data, index, refreshnotes }) {
    const NoteColors = ["#FBBF24", "#FB923C", "#A370D6", "#8BC32D", "#2CB382"];
    const randomColor = NoteColors[index % NoteColors.length];
    return (
        <div className='flex flex-col md:flex-row flex-wrap items-center '>
            <div className={`flex flex-col justify-between min-h-80  min-w-80 max-w-80 rounded-3xl shadow-lg`} style={{ backgroundColor: randomColor }}>
                <div className='flex flex-col p-6 '>
                    <h1 className='text-4xl text-left font-semibold break-words'>{data ? data.title : 'Lorem.'}</h1>
                    <p className='text-base my-4 text-left break-words'>{data ? data.content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, necessitatibus.'}</p>
                </div>
                <div className='flex justify-end p-6'>
                    <NoteButton refreshnotes={refreshnotes} data={data} />
                </div>
            </div>
        </div>
    )
}
