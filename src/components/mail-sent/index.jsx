import React from 'react'
import sent from "../../assets/images/sent.svg"

const MailSent = ({ handleAgain }) => {
    return (
        <div className='mail-sent py-[60px]'>
            <div className="text-center">
                <h3 className='text-[30px] light text-white'>Email is on the way</h3>
                <img src={sent} className='block mx-auto' alt="" />

                <button onClick={handleAgain} className='btn bg-[#FF6330] md:px-[40px] px-[20px] md:py-[20px] py-[10px] text-white rounded-[12px]'>
                    Envoyer Again
                </button>
            </div>
        </div>
    )
}

export default MailSent