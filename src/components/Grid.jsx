import React from 'react';


function MainGrid({ children }) {
    return (

        <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">

                {children}
            </div>
        </div>

    );
}

export default MainGrid;