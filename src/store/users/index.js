import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        save: (state, param) => {
            const { payload } = param;
            state.user = [...state.user, payload];
        }
    }
})

const { actions, reducer } = usersSlice
export const { save} = actions;
export default reducer