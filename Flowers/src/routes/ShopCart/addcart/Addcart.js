import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Icon, Checkbox, Modal } from 'antd';
import action from '../../../store/action/index'

import { removeShopCart, addShopCart, queryShopCart,pay } from '../../../api/product'
import { checkLogin } from '../../../api/person'


class Addcart extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    async componentDidMount() {
      
        await this.props.queryUnpay();

    }



    render() {


        this.data = this.props.shopCart.unpay;

        let obj = {}, cur;
        for (let i = 0; i < this.data.length; i++) {
            cur = this.data[i].id;
            if (obj[cur]) {
                obj[cur]++;
            } else {
                obj[cur] = 1;
            }
        }

        this.newunpay = [];
        for (let attr in obj) {
            this.newunpay.push(
                this.data.find((item, index) => {
                    if (item.id == attr) {
                        item.count = parseInt(obj[attr]);
                        return true;
                    }
                })
            );
        }
      /*  let set = new Set(this.data); // {1,2,3,4}
        this.newunpay = Array.from(set) // 再把set转变成array*/
        /* for (var i = 0; i < this.data.length - 1; i++) {
            var Cur = this.data[i];
            for (var j = i + 1; j < this.data.length;) {
                Cur.id === this.data[j].id ? this.data.splice(j, 1) : j++;
            }
        } */



        return <section>
            <div className='addCart'><Icon type='left' onClick={ev => {
                this.props.history.go(-1)
            }
            } />购物车<Icon type='home' onClick={ev => {
                this.props.history.push('/home')
            }
            } />
            </div>

            {this.newunpay.map((item, index) => {
                let { name, pic, price, id, check, count } = item;
                this.check = check;
                return <div className='list-item clearfix' key={index}>
                    <div className='check'>
                        <Checkbox
                            checked={check}
                            onChange={this.props.handleSelect.bind(this, id)}>
                        </Checkbox>
                    </div>
                    <span className='car-img'>
                        <Link to={`/shopcart/product?id=${id}`}>
                            <img src={pic} alt="" />
                        </Link>
                    </span>
                    <div className='car-info'>
                        <p className='info-title'>{name}</p>
                        <div className='item-info'>
                            <span className='price'>￥{price}</span>
                            <span className='count'>
                                <Icon type='minus' onClick={this.subtract} />
                                <input type="text"
                                    maxLength='3'
                                    value={count}
                                    id={id}
                                    onChange={ev => {

                                    }} />
                                <Icon type='plus' onClick={this.plus} /></span>
                            <span className='delete' onClick={this.del} id={id}>删除</span>
                        </div>
                    </div>
                </div>
            })}


            <div className='cartBottom'>

                <div className='total'>
                    <Checkbox
                        checked={this.newunpay.length === 0 ? false : this.props.selectAll}
                        onChange={this.props.handleSelect.bind(this, 'all')}>
                    </Checkbox>
                    <span>全选</span>
                    合计<span>{this.price()}</span>
                </div>
                <div className='goBuy' onClick={this.payment}>支付</div>
            </div>
        </section >;
    }

    del = async ev => {
        let target = ev.target;
        await removeShopCart(target.id)
        this.props.queryUnpay()
    }

    come() {
        const modal = Modal.success({
            title: '请先登录！'
        });
        setTimeout(() => modal.destroy(), 2000);
    }
    success() {
        const modal = Modal.success({
            title: '支付成功！'
        });
        setTimeout(() => modal.destroy(), 2000);
    }
    pay() {
        const modal = Modal.success({
            title: '没有要被支付的商品'
        });
        setTimeout(() => modal.destroy(), 2000);
    }

    payment = async ev => {
        //=>验证当前是否登录
        let result = await checkLogin();
        if (parseFloat(result.code) !== 0) {

            this.come()
            return;
        }
       
        let selectIDList = [];
        this.props.shopCart.unpay.forEach(item => {
            if (item.check) {
                selectIDList.push(item.storeID);
            }
        });
        if (selectIDList.length === 0) {
           this.pay()
            return;
        }
        this.success()
        selectIDList = selectIDList.map(storeID => {
            return queryShopCart(storeID);
        });
        Promise.all(selectIDList).then(() => {
            this.props.queryUnpay();
            this.props.queryPay();
        })
        this.newunpay.forEach(item=>{
            if(item.check===true){
                console.log(32);
                pay(1);
                console.log(2);
            }
        })
    }


    price = () => {
        if (this.newunpay.length === 0) return;

        let ary = [];

        this.newunpay.map(item => {
            if (item.check === true) {
                ary.push(item.price * item.count)
            }
        })
        let a = ary.reduce((prev, next) => {
            return prev + next
        }, 0)

        return a || 0;
    }

    subtract = async ev => {
        let target = ev.target,
            next = target.nextElementSibling;
        if (next.value <= 1) return;
        // next.value = parseFloat(next.value) - 1;
        let result = await checkLogin();
        if (parseFloat(result.code) !== 0) {
            this.come()
            return;
        }
        await this.props.queryMinus(next.id)
        this.props.queryUnpay();
    }

    plus = async ev => {
        let target = ev.target,
            prev = target.previousElementSibling;
        // prev.value = parseFloat(prev.value) + 1;
        this.val = prev.value;
        let result = await checkLogin();
        if (parseFloat(result.code) !== 0) {
            this.come();
            return;
        }
        await addShopCart(prev.id);
        this.props.queryUnpay();
    }
}

export default withRouter(connect(state => ({ ...state.shopcart }), action.shopcart)(Addcart));