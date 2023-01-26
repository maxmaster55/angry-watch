import React from 'react'
import CustomButton from '../Buttons/CustomButton'
import { FaUser } from 'react-icons/fa'
import { AiFillSetting } from 'react-icons/ai'

export default function NavActions() {
    return (
        <div className='flex'>
            {/* TODO: add Download functionality */}
            <CustomButton handleClick={() => { }}>
                <AiFillSetting />
            </CustomButton>
            {/* TODO: make the profile page */}
            <CustomButton handleClick={() => { }}>
                <FaUser />
            </CustomButton>
        </div>
    )
}
