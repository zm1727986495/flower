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
            <div className='addCart'><Icon type='left' onClick={ev => {
                this.props.history.go(-1)
            }
            }/>购物车<Icon type='home' onClick={ev => {
                this.props.history.push('/home')
            }
            }/>
            </div>
            <div className='empty'>
                <img src="https://img02.hua.com/m/empty_cart3.png" alt=""/>
                <p>别让你的心意空空如也...</p>
                <Link to='/home'>去挑选礼物</Link>
            </div>
        </section>;
    }
}

export default withRouter(connect()(Addcart));