import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import NewUser from './pages/NewUser';
import NewCompany from './pages/NewCompany';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/newuser" component={NewUser} />
                <Route path="/newcompany" component={NewCompany} />
            </Switch>
        </BrowserRouter>
    );
}