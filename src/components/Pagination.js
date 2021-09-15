import React, { useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';

import { useSelector, useDispatch } from 'react-redux';
import { getPagination } from '../store/fetchActions';

function PaginationList() {

    const pagination = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPagination());
    }, [dispatch])

    return (
        <div className="flex justify-center align-center w-full p-8">
          {pagination?.map((page, i) =>   <Pagination key={i} count={page.page} variant="outlined" shape="rounded" />)}
        </div>
    )
}

export default PaginationList