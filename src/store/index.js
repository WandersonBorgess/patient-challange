import { configureStore } from '@reduxjs/toolkit';

import reducer from './users';

export default configureStore({
    reducer: {
        users: reducer,
    }
})