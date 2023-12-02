import React from 'react'

const TextColumn = () => {
    return (
        <div className='text-column py-[80px]'>
            <div className="container">
                <div className="flex lg:flex-row flex-col lg:gap-0 gap-5 justify-between items-start">
                    <div className="lg:w-[60%] w-full">
                        <h1 className='text-white lg:text-[62px] md:text-[40px] text-[30px] font-[500]'>
                        Send Messages to <br />Your Future Self with <br />TimeCapsule Email!
                        </h1>
                    </div>

                    <div className="lg:w-[40%] w-full lg:text-right">
                        <p className="text-white md:text-[22px] light">
                        We’re a diverse group of marketers, writers, designers, strategists, and developers, who create things people love to interact with.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextColumn