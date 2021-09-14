import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import List from './screens/List';

function Routes() {
    return (
        <BrowserRouter>
            <Route component={List} path="/" exact />
        </BrowserRouter>
    )
}

export default Routes;