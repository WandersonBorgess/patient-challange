import React from 'react';

function Header({title}) {

    return (
        <header className="bg-white flex p-2">
            <div className="flex-1 align-center flex">
                <strong>{title}</strong>
            </div>

            <div className="p-4 rounded-full bg-gray-200 flex justify-center align-center">
                <i className="fas fa-user" />
            </div>

        </header>
    )
}

export default Header;