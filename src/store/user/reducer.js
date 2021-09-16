import {createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = []

export const loadUsers = createAction('LOAD_USERS');
export const loadUser = createAction('LOAD_USER');

export default createReducer(INITIAL_STATE, { 
    [loadUsers.type]: (state, action) => [...action.payload],
    [loadUser.type]: (state, action) => [...state, action.payload]
})
