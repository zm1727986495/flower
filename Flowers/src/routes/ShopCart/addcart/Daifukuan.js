import React from 'react';
import {connect} from 'react-redux';
import {withRouter,Link} from 'react-router-dom';
import {Icon} from 'antd';



class Addcart extends React.Component {
    constructor(props,context){
        super(props,context);

    }

    render(){

        return <section>
            <div className='Daifu'>
                <div className='addCart'><Icon type='left' onClick={ev => {
                    this.props.history.go(-1)
                }
                }/>待付款<Icon type='home' onClick={ev => {
                    this.props.history.push('/home')
                }
                }/>
                </div>
                <div className='empty-list'>
                    <img src="https://img02.hua.com/m/no_order.png" alt="" />
                    <p>暂无相关订单</p>
                </div>
            </div>
        </section>;
    }
}

export default withRouter(connect()(Addcart));