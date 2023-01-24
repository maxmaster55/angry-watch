import React from 'react'
import CustomButton from '../Buttons/CustomButton'
import { FaDownload, FaUser } from 'react-icons/fa'

export default function NavActions() {
    return (
        <div className='flex'>
            {/* TODO: add Download functionality */}
            <CustomButton handleClick={() => { }}>
                <FaDownload />
            </CustomButton>
            {/* TODO: make the profile page */}
            <CustomButton handleClick={() => { }}>
                <FaUser />
            </CustomButton>
        </div>
    )
}
