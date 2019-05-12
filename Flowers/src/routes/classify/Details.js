import React from 'react';
import {connect} from 'react-redux';
import '../../static/css/Classify.less';
import {Icon,Carousel, BackTop} from 'antd';
import {Link, withRouter} from 'react-router-dom';
import action from '../../store/action/index';


class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is: false
        };


    }


    componentDidMount() {
        window.onscroll = () => {
            let h = document.documentElement.scrollTop;
            if (h >= 500) {
                this.setState({
                    is: true
                })
            } else {
                this.setState({
                    is: false
                })
            }
        };

        this.props.queryList();

    }

    change = ev => {
        let target = ev.target;
        let child = this.refs.killWrapper.children,
            ary = [];
        let miao=this.refs.miao.children;
        [].forEach.call(miao,(item,index)=>{
            item.className='';
            target.className='active'
        });

        for (let i = 0; i < child.length; i++) {
            let item = child[i];
            ary.push(item.offsetTop)
        }

        let index = target.getAttribute('myindex');

        let step;
        if (document.documentElement.scrollTop >= ary[index] - 100) {
            step = -50;
        } else {
            step = 50;
        }

        let timer = setInterval(() => {
            if (step > 0) {
                if (document.documentElement.scrollTop >= ary[index] - 100) {
                    clearInterval(timer);
                    return;
                }

                document.documentElement.scrollTop = document.documentElement.scrollTop + step;
            } else {
                if (document.documentElement.scrollTop <= ary[index] - 100) {
                    clearInterval(timer);
                    return;
                }

                document.documentElement.scrollTop = document.documentElement.scrollTop + step;
            }

        }, 17)

    };


    render() {
        let {data} = this.props.queryCList;


        return <section className='DetailBox'>
            <div className='detail_header'><Icon type='left' onClick={ev => {
                this.props.history.go(-1)
            }
            }/>特惠促销鲜花礼物<Icon type='home' onClick={ev => {
                this.props.history.push('/home')
            }
            }/>
            </div>
            <div className='detail_banner'><img src="https://img02.hua.com/zhuanti/temai/2018/m-banner.jpg" alt=""/>
            </div>
            <div className='list_menu' style={{display: this.state.is ? 'block' : 'none'}}>
                <ul className='clearfix' onClick={this.change} ref='miao'>
                    <li className='active' myindex={0}>心动秒杀</li>
                    <li myindex={1}>尖货集结</li>
                    <li myindex={2}>鲜花精选</li>
                    <li myindex={3}>永生花区</li>
                    <li myindex={4}>创意礼品</li>
                </ul>
            </div>

            <div>
                <div className='welfare_top' ref={x => this.first = x} id='fuli'>福利</div>
                <div className='welfare_bottom'>抢到就是赚到</div>
                <div className='flower_wrapper'>
                    <Carousel>
                        <div>
                            <ul className='clearfix'>
                                <li><Link to='/shopcart/product?id=1'>
                                    <img src="https://img01.hua.com/uploadpic/newpic/1070035.jpg_220x240.jpg" alt=""/>
                                    <p className='flower_name'>鲜花</p>
                                    <p className='flower_title'>戴安娜玫瑰九支装</p>
                                    <p className='flower_price'>￥128</p>
                                </Link>
                                </li>
                                <li><Link to='/shopcart/product?id=1'>
                                    <img src="https://img01.hua.com/uploadpic/newpic/9012078.jpg_220x240.jpg" alt=""/>
                                    <p className='flower_name'>茉莉花</p>
                                    <p className='flower_title'>茉莉花茉莉花茉莉花</p>
                                    <p className='flower_price'>￥128</p>
                                </Link>
                                </li>
                                <li><Link to='/shopcart/product?id=1'>
                                    <img src="https://img01.hua.com/uploadpic/newpic/1062048.jpg_220x240.jpg" alt=""/>
                                    <p className='flower_name'>玫瑰花</p>
                                    <p className='flower_title'>玫瑰花九支装</p>
                                    <p className='flower_price'>￥128</p>
                                </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className='clearfix'>
                                <li><Link to='/shopcart/product?id=1'>
                                    <img src="https://img01.hua.com/uploadpic/newpic/1070035.jpg_220x240.jpg" alt=""/>
                                    <p className='flower_name'>鲜花</p>
                                    <p className='flower_title'>戴安娜玫瑰九支装</p>
                                    <p className='flower_price'>￥128</p>
                                </Link>
                                </li>
                                <li><Link to='/shopcart/product?id=1'>
                                    <img src="https://img01.hua.com/uploadpic/newpic/9012078.jpg_220x240.jpg" alt=""/>
                                    <p className='flower_name'>茉莉花</p>
                                    <p className='flower_title'>茉莉花茉莉花茉莉花</p>
                                    <p className='flower_price'>￥128</p>
                                </Link>
                                </li>
                                <li><Link to='/shopcart/product?id=1'>
                                    <img src="https://img01.hua.com/uploadpic/newpic/1062048.jpg_220x240.jpg" alt=""/>
                                    <p className='flower_name'>玫瑰花</p>
                                    <p className='flower_title'>玫瑰花九支装</p>
                                    <p className='flower_price'>￥128</p>
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div ref='killWrapper'>
                <div className='kill'>
                    <div className='welfare_top'>爆款推荐</div>
                    <div className='welfare_bottom'>生活需要仪式感</div>
                    <div className='product_list'>
                        <Link to='/shopcart/product?id=1'>
                            <div className='product_item clearfix'>
                                <div className='product_pic'><img
                                    src="https://img01.hua.com/uploadpic/newpic/9010966.jpg_220x240.jpg" alt=""/></div>
                                <div className='product_info'>
                                    <div className='product_item_tag'>
                                        高端礼盒 × 坚固耐压
                                    </div>
                                    <div className='product_item_name'>一往情深</div>
                                    <div className='product_item_desc'>19支红玫瑰，寓意永远爱你</div>
                                    <div className='product_item_price'>￥288</div>
                                    <div className='buy'>立即购买</div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/shopcart/product?id=1'>
                            <div className='product_item clearfix'>
                                <div className='product_info'>
                                    <div className='product_item_tag'>
                                        高端礼盒 × 坚固耐压
                                    </div>
                                    <div className='product_item_name'>一往情深</div>
                                    <div className='product_item_desc'>19支红玫瑰，寓意永远爱你</div>
                                    <div className='product_item_price'>￥288</div>
                                    <div className='buy'>立即购买</div>
                                </div>
                                <div className='product_pic'><img
                                    src="https://img02.hua.com/zhuanti/temai/2018/m-pic-1.jpg" alt=""/></div>

                            </div>
                        </Link>
                        <Link to='/shopcart/product?id=1'>
                            <div className='product_item clearfix'>
                                <div className='product_pic'><img
                                    src="https://img01.hua.com/uploadpic/newpic/9012240.jpg" alt=""/></div>
                                <div className='product_info'>
                                    <div className='product_item_tag'>
                                        高端礼盒 × 坚固耐压
                                    </div>
                                    <div className='product_item_name'>一往情深</div>
                                    <div className='product_item_desc'>19支红玫瑰，寓意永远爱你</div>
                                    <div className='product_item_price'>￥288</div>
                                    <div className='buy'>立即购买</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='kill'>
                    <div className='welfare_top' id='meili'>致美丽的你</div>
                    <div className='welfare_bottom'>生活需要仪式感</div>
                    <div className='flowers_list'>
                        <ul className='clearfix'>
                            {data.map((item, index) => {

                                let {dec, pic, price} = item;
                                return <Link to='/shopcart/product' key={index}>
                                    <li>
                                        <img src={pic} alt=""/>
                                        <p className='product_desc'>{dec}</p>
                                        <p className='product_price'>￥{price}</p>
                                    </li>
                                </Link>
                            })}
                        </ul>
                    </div>
                </div>
                <div className='kill'>
                    <div className='welfare_top'>鲜花精选</div>
                    <div className='welfare_bottom'>生活需要仪式感</div>
                    <div className='flowers_list'>
                        <ul className='clearfix'>
                            {data.map((item, index) => {
                                let {dec, pic, price} = item;
                                return <Link to='/shopcart/product' key={index}>
                                    <li>
                                        <img src={pic} alt=""/>
                                        <p className='product_desc'>{dec}</p>
                                        <p className='product_price'>￥{price}</p>
                                    </li>
                                </Link>
                            })}
                        </ul>
                    </div>
                </div>
                <div className='kill'>
                    <div className='welfare_top'>永生花区</div>
                    <div className='welfare_bottom'>生活需要仪式感</div>
                    <div className='flowers_list'>
                        <ul className='clearfix'>
                            {data.map((item, index) => {
                                let {dec, pic, price} = item;
                                return <Link to='/shopcart/product' key={index}>
                                    <li>
                                        <img src={pic} alt=""/>
                                        <p className='product_desc'>{dec}</p>
                                        <p className='product_price'>￥{price}</p>
                                    </li>
                                </Link>
                            })}
                        </ul>
                    </div>
                </div>
                <div className='kill'>
                    <div className='welfare_top'>尖货集结</div>
                    <div className='welfare_bottom'>生活需要仪式感</div>
                    <div className='flowers_list'>
                        <ul className='clearfix'>
                            {data.map((item, index) => {
                                let {dec, pic, price} = item;
                                return <Link to='/shopcart/product' key={index}>
                                    <li>
                                        <img src={pic} alt=""/>
                                        <p className='product_desc'>{dec}</p>
                                        <p className='product_price'>￥{price}</p>
                                    </li>
                                </Link>
                            })}
                        </ul>
                    </div>
                </div>
            </div>


            <div className='noMore'>
                <Icon type='frown-o' style={{fontSize: '.4rem', marginRight: '.1rem'}}/>没有更多啦！~~~
            </div>
            <div className='Copyright'>Copyright © 2005~2018 花礼网(中国鲜花礼品网) 版权所有</div>
            <div>
                <BackTop>
                    <div className="ant-back-top-inner">
                        <div className={'backTop'}>
                            <img src="http://img02.hua.com/m/icon/arrow_Top.png" alt=""/>
                        </div>
                    </div>
                </BackTop>

            </div>

        </section>;
    }


}

export default withRouter(connect(state => ({...state.classify}), action.classify)(Details))