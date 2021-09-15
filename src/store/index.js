import { configureStore } from '@reduxjs/toolkit';

import reducer from './user/reducer';

export default configureStore({
    reducer: {
        users: reducer,
    }
})