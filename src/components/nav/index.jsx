import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Nav = () => {
    return (
        <div className='nav py-4'>
            <div className="container">
                <div className="flex justify-between items-center">
                    <h2 className='text-white text-[25px] bold'>
                        LOGO
                    </h2>
                    <div className="flex justify-end items-center gap-[28px]">
                        <a href="/">
                            <FaFacebook className='text-white text-xl'/>
                        </a>
                        <a href="/">
                            <FaTwitter className='text-white text-xl'/>
                        </a>
                        <a href="/">
                            <FaLinkedin className='text-white text-xl'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav