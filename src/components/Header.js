import React from 'react';

import { useSelector } from 'react-redux';
function Header() {

    const users = useSelector(state => state.users);

    return (
        <header className="bg-white flex p-2">
            <div className="flex-1 align-center flex">
                <strong>Company</strong>
            </div>

            {users?.map((user, i) => (
                <div key={i} className="w-12 h-12 rounded-full">
                    <img src={user.picture.thumbnail} alt="" width={48} height={48} className="rounded-full" />
                </div>
            ))}

        </header>
    )
}

export default Header;