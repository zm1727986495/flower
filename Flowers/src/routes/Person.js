/*
   在根组件，也就是自己的一级组件里面传进来less，这样就可以直接的跟根组件一起使用里面的less

*/

import React from 'react';
import {connect} from 'react-redux';
import {Switch,Route,Redirect} from 'react-router-dom';

/*导入自己的组件*/
import Info from './person/Info';
import Login from './person/Login';
import Register from './person/Register';
import Tip from './person/Tip';
import signOut from './person/signOut';
import coupon from './person/coupon';
import integral from './person/integral';

/*import api  请求数据的方法*/
import {checkLogin} from '../api/person';

/*import less*/
import '../static/css/person.less'

/*RENDER  渲染*/
class Person extends React.Component {
    constructor(props,context){
        super(props,context);
        //state
        this.state={
            isLogin:false
        }
    }
        async componentWillMount(){
        let result = await checkLogin(),
            isLogin=parseFloat(result.code)===0?true:false;
        this.setState({isLogin});
        }

        async componentWillReceiveProps(){
            let result = await checkLogin(),
                isLogin=parseFloat(result.code)===0?true:false;
            this.setState({isLogin});
        }

    render(){
        return <section>
            <Switch>
                <Route path='/person/info' render={()=>{
                    if(this.state.isLogin){
                        return <Info/>
                    }
                    return <Tip/>
                }}/>
                <Route path='/person/login' component={Login}/>
                <Route path='/person/register' component={Register}/>
                <Route path='/person/signout' component={signOut}/>
                <Route path='/person/coupon' component={coupon}/>
                <Route path='/person/integral' component={integral}/>
                <Redirect from='/person' to='/person/info'/>
            </Switch>
        </section>;
    }
}

export default connect()(Person);