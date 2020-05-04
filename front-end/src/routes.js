import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import NewUser from './pages/NewUser';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/newuser" component={NewUser} />
            </Switch>
        </BrowserRouter>
    );
}