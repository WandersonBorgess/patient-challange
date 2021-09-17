import {createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = []

export const User = createAction('USER');
export const Users = createAction('USERS');

export default createReducer(INITIAL_STATE, { 
    [User.type]: (state, action) => [...state, action.payload],
    [Users.type]: (state, action) => [...action.payload],
})
