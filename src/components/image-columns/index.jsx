import React from 'react'
import man from "../../assets/images/man.png"

const ImageColumn = () => {
    return (
        <div className='image-column pb-[100px] pt-[50px]'>
            <div className="container">
                <div className="flex md:flex-row flex-col gap-[40px] justify-between items-center">
                    <div className="lg:w-1/2 w-full">
                        <h4 className='uppercase mb-[15px] text-[#FD6F35] text-lg'>About us</h4>
                        <h2 className='text-white md:text-[40px] text-[30px] lh-40 font-[500]'>
                            Welcome to <br /><span className='text-[#FD6F35] font-[500]'>TimeCapsule Email</span>
                        </h2>

                        <p className='text-white mt-[12px] mb-[27px]'>
                            Where we empower you to bridge the gap between the present and the future through the art of digital communication. Our mission is to provide you with a platform that makes sending messages to your future self a seamless and delightful experience.
                        </p>

                        <button className='btn bg-[#FF6330] px-[32px] py-[18px] text-white rounded-[12px]'>
                            Craft Now
                        </button>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <img src={man} className='w-full' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageColumn