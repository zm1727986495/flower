import React from 'react';
import {connect} from 'react-redux';

import {Switch, Route,HashRouter} from 'react-router-dom'
import homeList from './Home/homeList.js';
import action from '../store/action/index';
import home from './Home/home'
import '../static/css/Home.less';





class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {

        return <section className={'homeBox'}>
            <Switch>
                <Route path='/home' exact component={home}/>
                <Route path='/home/homelist' component={homeList}/>
            </Switch>
        </section>;
    }
}

export default connect(state => ({...state.details}), action.details)(Home);