/*BASE*/
import React from 'react';
import ReactDOM, {render} from 'react-dom';

import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
/*REDUX STORE*/
import {Provider} from 'react-redux';

import store from './store/index';

/*ANTD    LocaleProvider国际化组件 ，为了把所有组件都变成汉化的*/
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

/*import css*/
import './static/css/reset.min.css';
import './static/css/common.less';


import NavBottom from './component/NavBottom';
import Home from "./routes/Home";
import Classify from "./routes/Classify";
// import b1 from './routes/classify/b1'
import ShopCart from "./routes/ShopCart";
import Person from "./routes/Person";
import Details from './routes/classify/Details';
import homeList from "./routes/Home/homeList";

/*let img=require('./static/images/logo.png');*/


/*render*/
render(<Provider store={store}>
    <HashRouter>
        <LocaleProvider locale={zh_CN}>
            <div>
                <main className='container'>
                    <Switch>
                        <Route path='/home' component={Home}/>
                        <Route path='/classify' component={Classify}/>
                        <Route path='/shopcart' component={ShopCart}/>
                        <Route path='/person' component={Person}/>
                        <Route path='/suibianqi' component={Details}/>
                        <Redirect to='/home'/>
                    </Switch>
                </main>
                <NavBottom/>

            </div>
        </LocaleProvider>
    </HashRouter>
</Provider>, root);

