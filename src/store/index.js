import { combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit';

import { save } from './users';

const store = createStore(() => combineReducers(save), {}, applyMiddleware())

export default store;