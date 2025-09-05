import React, { useState } from 'react'

const FirstPage = () => {
    const [userName, setUserName] = useState('');

    const handleContinue = () => {
    }

    return (
        // <div className='w-full flex items-center h-screen bg-gray-900 text-white bg-[url(https://cdn.pixabay.com/photo/2022/05/11/09/12/information-7188889_1280.jpg)] bg-center '>
        // <div className='w-full flex items-center h-screen bg-gray-900 text-white bg-[url(https://cdn.pixabay.com/photo/2014/05/27/23/32/matrix-356024_1280.jpg)] '>
        // <div className='w-full flex items-center h-screen bg-gray-900 text-white bg-[url(https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg)] '>
        <div className='w-full h-screen bg-gray-900 text-white bg-[url(https://cdn.pixabay.com/photo/2024/09/19/17/34/ai-generated-9059343_1280.png)] bg-cover bg-center '>
            <div className='relative z-3 mx-auto text-centers w-1/2 py-6 '>
                <img src="/assets/icons/tab-leet-icon.svg" width='60px' className='mx-auto ' />
            </div>
            <div className='p-4 h-100 flex items-end w-full relative z-3'>
                <div className='w-full md:w-1/2 mx-auto text-center '>
                    <h1 className='text-center font-medium text-4xl'>Your coding journey awaits <br></br>— what's your LeetCode username?</h1>
                    <input value={userName} name='userName' onChange={(e) => setUserName(e.target.value)} type="text" className='border-b-3 border-white w-[70%] !outline-none text-center p-2 text-3xl font-medium mt-6' />
                    <p className='mt-6 font-medium text-lg'>Please type your username properly.</p>
                    <button onClick={handleContinue} className='border-2 hover:bg-white hover:text-black duration-200 cursor-pointer border-white mt-9 text-xl px-8 py-2 rounded-3xl'>Continue</button>
                </div>
            </div>
            <div className='w-full h-full top-0 absolute bg-black opacity-50 z-2'></div>
        </div>
    )
}

export default FirstPage