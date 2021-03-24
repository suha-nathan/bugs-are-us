import React from 'react';
import {MemoryRouter, Route} from 'react-router-dom';

const TestingRouter = ({ComponentWithRedirection, RedirectUrl, RedirectComponent}) => (
    <MemoryRouter>
        <Route path="/" exact={true}>
            <ComponentWithRedirection />
        </Route>
        <Route path={RedirectUrl} exact>
            <RedirectComponent />
        </Route>
    </MemoryRouter>
)

export default TestingRouter
