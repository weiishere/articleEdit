import React, { Component } from 'react';
import { render } from 'react-dom';
import { combineReducers } from 'redux-immutable';
import { BrowserRouter, Route, Switch, IndexRoute } from 'react-router-dom';
import 'fastclick/lib/fastclick.js';
import App from '../App';
import Bundle from '../util/Bundle';
import reducers from './reducers';
//import Home from './home'

// import Root_bundle from 'bundle-loader?lazy&name=Root!./Root';
// import Home_bundle from 'bundle-loader?lazy&name=Home!./home';
// const Root = (props) => <Bundle load={Root_bundle}>{ParamComp => <ParamComp {...props} />}</Bundle>;
// const Home = (props) => <Bundle load={Home_bundle}>{ParamComp => <ParamComp {...props} />}</Bundle>;
import Root from './Root';
import Home from './home';

const routes = ({ history, location }) => {
    return <Route path="/" render={({ history, location }) => (
        <Root history={history} location={location} >
            <Switch>
                <Route breadcrumbName="文章编辑" path="/home" render={({ history, location, match }) => (
                    <Switch>
                        <Route breadcrumbName="编辑" path="/home/main" exact component={Home} />
                    </Switch>
                )} />
            </Switch>
        </Root>
    )} />
}

render(
    <App routes={routes} reducers={reducers} basename='/' />,
    document.getElementById('root')
)