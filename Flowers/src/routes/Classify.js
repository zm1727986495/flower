import React from 'react';
import {connect} from 'react-redux';
import {Icon} from 'antd';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import action from '../store/action/index'

import listDetail from './classify/listDetail';

import '../static/css/Classify.less';

class Classify extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.queryClassify()
    }

    render() {
        let {classifyData} = this.props;
        if (classifyData.length === 0) return '';

        return <section className='ClassifyBox'>
            <div className='search'><input type="text" placeholder="鲜花"/><Icon type='search'/></div>
            <div className='classContainer clearfix'>

                <div className='listLeft'>
                    <ul className='clearfix'>
                        {classifyData.map((item, index) => {
                            let {id, title} = item;

                            return <li key={index}>
                                <NavLink to={`/classify/listDetail/${id}/${title}`}>{title}</NavLink>
                            </li>
                        })}
                    </ul>
                </div>


                <div className='listRight'>
                    <Switch>
                        <Route path='/classify/listDetail/:id/:title' component={listDetail}/>
                        <Redirect to='/classify/listDetail/1/热门推荐'/>
                    </Switch>
                </div>
            </div>
        </section>;
    }
}

export default connect(state => ({...state.classify}), action.classify)(Classify);