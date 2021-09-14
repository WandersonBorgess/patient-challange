import React, { useEffect, useState } from 'react';

import api from '../services/api';

function Header() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.get('').then(({ data }) => {
            setUsers(data.results);
        })
    }, []);

    return (
        <header className="bg-white flex p-2">
            <div className="flex-1 align-center flex">
                <strong>Company</strong>
            </div>

            {users?.map((user) => (
                <div key={user.id} className="bg-gray-400 w-12 h-12 rounded-full">
                    <img src={user.picture.thumbnail} alt="" width={48} height={48} className="rounded-full" />
                </div>
            ))}

        </header>
    )
}

export default Header;