import React from 'react'
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Result from './../components/Result/Result';
import NotFound from './../components/Error/NotFound';
import Detail from './../components/Detail/Detail';
import Home from './../components/Home/Home';
import Layout from '../components/Layout/Layout';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route 
                    exact 
                    path='/' 
                    component={()=><Layout><Home/></Layout>}>
                </Route>

                <Route 
                    exact 
                    path='/items/:id' 
                    component={()=><Layout><Detail/></Layout>}>
                </Route>

                <Route 
                    exact 
                    path='/items' 
                    component={()=><Layout><Result/></Layout>}>
                </Route>

                <Route 
                    exact 
                    path='/page-not-found' 
                    component={()=><Layout><NotFound/></Layout>}>
                </Route>

                <Redirect 
                    to="/page-not-found" 
                />
            </Switch>
        </Router>

    )
}

export default AppRouter;
