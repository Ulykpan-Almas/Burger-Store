import React,{Component} from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import App from './App';
import Landing from './Landing';
import NotFound from './NotFound';

const Router = () => {
    return(
        <BrowserRouter>
        <switch>
            <Route exact path='/' component={Landing}/>
            <Route path='/restaurant/:restaurantId' component={App} />
            {/* <Route component={NotFound} /> */}
        </switch>
        </BrowserRouter>
    )
}

export default Router