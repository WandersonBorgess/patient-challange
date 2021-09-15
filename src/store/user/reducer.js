import {createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = []

export const loadUsers = createAction('LOAD_USERS');

export default createReducer(INITIAL_STATE, { 
    [loadUsers.type]: (state, action) => [...action.payload]
})
