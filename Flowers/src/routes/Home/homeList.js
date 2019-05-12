import React from 'react';
import {connect} from 'react-redux';
import {Icon, BackTop} from 'antd';
import {NavLink, Link, withRouter, Switch, Route, Redirect} from 'react-router-dom';
import action from '../../store/action/index'


//IMPORT COMPONENT
import all from './homelist/all';
import love from './homelist/love';
import friend from './homelist/friend';
import family from './homelist/family';

class homeList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            is: false,
            data: [],
            sort:true
        }
    }

    componentWillMount() {
        this.props.queryAll();
        this.props.queryLove();
        this.props.queryFriend();
        this.props.queryFamily();
        this.props.querySortAll();
        this.props.querySortLove();
        this.props.querySortFriend();
        this.props.querySortFamily();
    }


    render() {
        return <div className={'homeListBox'}>
            <div className='home_header'><Icon type='left' onClick={ev => {
                this.props.history.go(-1)
            }
            }/><span>爱情鲜花</span><Icon className={'listGoHome'} type='home' onClick={ev => {
                this.props.history.push('/home')
            }
            }/>
            </div>

            <ul className={'homlist_nav'}>
                <li>
                    <div>
                        <a href="javascript:;">综合</a>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="javascript:;">销量</a>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="javascript:;" onClick={this.Sort}>价格</a>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="javascript:;">最新</a>
                    </div>
                </li>
            </ul>


            <ul className={'homlist_classify '}>
                <li>
                    <NavLink to='/home/homelist/all'>
                        全部
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/home/homelist/love'>
                        爱情鲜花
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/home/homelist/friend'>
                        友情鲜花
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/home/homelist/family'>
                        送长辈鲜花
                    </NavLink>
                </li>
                <li>
                    <Link to='/classify/b1'>
                        <Icon type='caret-right' style={{color: ' #666'}}/>鲜花分类
                    </Link>
                </li>
            </ul>
            <div>
                <BackTop>
                    <div className="ant-back-top-inner">
                        <div className={'backTop'}>
                            <img src="http://img02.hua.com/m/icon/arrow_Top.png" alt=""/>
                        </div>
                    </div>
                </BackTop>
            </div>
            <div>
                <Switch>
                    <Route path='/home/homelist/all' component={all}/>
                    <Route path='/home/homelist/love' component={love}/>
                    <Route path='/home/homelist/friend' component={friend}/>
                    <Route path='/home/homelist/family' component={family}/>
                    <Redirect from='/home' to='/home/homelist/all'/>
                </Switch>
            </div>
            <div className={'footer'}>
                <div className={'footerPic'}>
                    <img src="https://img02.hua.com/m/list-loading.png" alt=""/>
                    <span>已经到底喽~</span>
                </div>
            </div>

            <div className={'copyright'}>
                <p>Copyright © 2005~2018 花礼网(中国鲜花礼品网) 版权所有</p>
                <p>永生花专区 www.hua.com</p>
            </div>
        </div>
    }

    Sort = () => {
        this.setState({
           sort:false
        });
        let {location} = this.props;
        let {pathname} = location;
        if (pathname === '/home/homelist/all') {
            this.props.history.push('/home/homelist/all');
        }else if(pathname === '/home/homelist/love'){
            this.props.history.push('/home/homelist/love');
        }else if(pathname === '/home/homelist/friend'){
            this.props.history.push('/home/homelist/friend');
        }else if(pathname === '/home/homelist/love'){
            this.props.history.push('/home/homelist/love');
        }
    }
}

export default withRouter(connect(state => ({...state.details}), action.details)(homeList));