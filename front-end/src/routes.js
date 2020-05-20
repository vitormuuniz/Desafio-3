import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import NewUser from './pages/NewUser';
import NewCompany from './pages/NewCompany';
import DisplayUsers from './pages/DisplayUsers';
import SubHeader from './components/Sub-Header';
import Header from './components/Header';



export default function Routes(){
    return(
        <BrowserRouter>
                <Header />
                <SubHeader />
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/newuser" component={NewUser} />
                <Route path="/newcompany" component={NewCompany} />
                <Route path="/users" component={DisplayUsers} />
                
            </Switch>
        </BrowserRouter>
    );
}