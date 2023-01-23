import React from "react";

// card body with a name and a description on hover with an image
function Card({ id, title, imageUrl, type, description, onClick }) {
    return (
        <div className="group bg-white shadow-lg relative text-white rounded-lg p-1 m-2 w-fit h-fit" onClick={() => onClick(type, id)}>
            <img className=" rounded-lg"
                src={imageUrl}
                alt="movie poster" />
            {type ? (<div className="absolute top-4 right-4 rounded-full bg-yellow-500 bg-opacity-50 py-1 px-2 group-hover:bg-opacity-100">
                {type}
            </div>) : null}
            <div className="absolute bottom-4 left-4 right-4">
                <div className="font-bold text-xl">{title}</div>
                <div className="truncate ">
                    {description}
                </div>
            </div>
        </div >
    );
}

export default Card;