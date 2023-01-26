import React from 'react'
import Centered from "./Centered"
import { AiOutlineLoading3Quarters } from "react-icons/ai"


export default function LoadingIndicator() {
    return (
        <Centered>
            <div className="animate-spin text-yellow-500">
                <AiOutlineLoading3Quarters size="50" />
            </div>
        </Centered>
    )

}