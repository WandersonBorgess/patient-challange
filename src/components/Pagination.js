import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

import randomPagination from '../data/randomUser.json';

function PaginationList() {
    const userPagination = randomPagination.info

    return (
        <div className="flex justify-center align-center w-full p-8">
            <Pagination count={userPagination.page} variant="outlined" shape="rounded" />
        </div>
    )
}

export default PaginationList