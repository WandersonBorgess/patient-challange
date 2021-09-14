import React from 'react';
import randomUser from '../data/randomUser.json';

function Header() {
    const userPicture = randomUser.results;

    return (
        <header className="bg-white flex p-2">
            <div className="flex-1 align-center flex">
                <strong>Company</strong>
            </div>

            {userPicture.map((item, k) => {
                return (
                    <div key={k} className="bg-gray-400 w-12 h-12 rounded-full">
                        <img src={item.picture.thumbnail} alt="" width={48} height={48} className="rounded-full" />
                    </div>
                )
            })}

        </header>
    )
}

export default Header;