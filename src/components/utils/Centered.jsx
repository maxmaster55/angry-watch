import React from 'react'


// a component that centers horizontally and vertically
export default function Centered({ children }) {
    return (
        <div className="flex justify-center items-center h-[90vh]">
            {children}
        </div>
    )
}