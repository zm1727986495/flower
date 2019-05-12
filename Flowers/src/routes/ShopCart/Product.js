import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import action from '../../store/action/index'

import {Icon, Carousel, BackTop,Rate} from 'antd'
import '../../static/css/product.less'
import Qs from 'qs'

import {addShopCart, removeShopCart} from '../../api/product'


class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            classTypes: []
        }

    }

    commonFn = async (nextProps) => {
        let {id = 1} = Qs.parse(nextProps.location.search.substr(1)) || {};
        this.courseId = id;

        let data = this.props.aryAll;
        if (data.length === 0) return;
        let {arypic} = data.find((item, index) => {
            return parseFloat(item.id) === parseFloat(id);
        })
        this.setState({
            classTypes: arypic
        })
    };

    componentWillReceiveProps(nextProps) {
        this.commonFn(nextProps);
    }

    async componentWillMount() {
        await this.props.queryAll(299)
        this.commonFn(this.props);
    }


    render() {
        let {classTypes} = this.state;
        if (classTypes.length === 0) return '';


        return (
            <div className='productBox' style={{background: 'rgba(255, 255, 255, 0)'}}>
                <div className='headBox clearfix'>
                    <Icon type='left' className='head_barL' onClick={this.go}/>
                    <Link to='/shopcart/shopping'>
                        <Icon type="shopping-cart" className='header_barR'/>
                    </Link>
                    <Link to='/home'>
                        <Icon type="home" className='header_barR1'/>
                    </Link>
                </div>


                <div className='main_pro_banner'>
                    <Carousel>

                        {classTypes.map((item, index) => {
                            let {img} = item;
                            return <div key={index}>
                                <img src={img} alt=""/>
                            </div>
                        })}
                    </Carousel>
                </div>

                <div className='main_pro_text'>
                    <div className='info_box'>
                        <div className='info_title clearfix'>
                            <span>
                                忘情巴黎 - 33枝红玫瑰
                            </span>
                            &nbsp;
                            <span className='cuxiao_tip'>
                                浪漫唯美 女神挚爱
                            </span>
                            <Rate allowHalf defaultValue={2.5} className={'order_ImgTopRight'} />
                        </div>

                        <div className='price_part'>
                            <span className='now_price'>￥298</span>
                            &nbsp;
                            <del className="before_price">￥383</del>
                            &nbsp; &nbsp;
                            <span className="discount_price">7.8折</span>
                        </div>
                    </div>

                    <ul className='info_huayu_box'>
                        <li>
                            <span style={{float: 'left'}}>花语</span>
                            <p className='info_huayu'>只想和你忘掉一切烦恼，尽情沉醉在最浪漫的气氛中。</p>
                        </li>
                        <li>
                            <span style={{float: 'left'}}>材料</span>
                            <p className='info_huayu'>33枝红玫瑰，石竹梅围绕 黑色条纹纸，红色缎带花结</p>
                        </li>
                        <li>
                            <span style={{float: 'left'}}>配送</span>
                            <p className='info_huayu'>全国</p>
                        </li>
                        <li>
                            <span style={{float: 'left'}}>附送</span>
                            <p className='info_huayu'>下单填写留言，即免费赠送精美贺卡！</p>
                        </li>
                    </ul>
                </div>

                <div className='date_part'>
                    <div>
                        <span>配送至</span>&nbsp;&nbsp;
                        <Icon type="environment-o"/>&nbsp;&nbsp;
                        <span>北京昌平区</span>
                    </div>
                    <div className='xiadan_time'>
                        现在下单，最快今日晚上送达
                    </div>
                </div>

                <div className={'order_Evaluation'}>
                    <div className={'order_Details clearfix'}>
                        <p className={'clearfix'}>订单详情<span>1037条评价<Icon type={'right'}/></span></p>
                    </div>
                    <div className={'order_Img'}>
                        <div className={'order_ImgTop clearfix'}>
                            <div className={'order_ImgTopLeft'}>
                                <img src="https://img02.hua.com/pc/assets/img/avatar_default_05.jpg" alt=""/>
                                <span>杉*</span>
                            </div>
                            <div className={'order_ImgTopRight'}>
                                <i></i>
                            </div>
                        </div>
                        <div className={'order_ImgBottom clearfix'}>
                            <span>非常好，花很鲜</span>
                            <img src="https://img.hua.com/reviewpic/shipai/2018/06/28/f29f57a2d1104e62b97761ccdac494dd.jpg" alt=""/>

                            <p className={'zipai'}>花店自拍</p>
                            <p className={'didian'}><Icon type={'environment-o'}/>北京朝阳区</p>
                            <p className={'riqi'}>2018-06-28</p>
                        </div>
                    </div>
                </div>
                <div className={'order_Evaluation'}>
                    <div className={'order_Details clearfix'}>
                        <p className={'clearfix'}>订单详情<span>1037条评价<Icon type={'right'}/></span></p>
                    </div>
                    <div className={'order_Img'}>
                        <div className={'order_ImgTop clearfix'}>
                            <div className={'order_ImgTopLeft'}>
                                <img src="https://img02.hua.com/pc/assets/img/avatar_default_08.jpg" alt=""/>
                                <span>李*</span>
                            </div>
                            <div className={'order_ImgTopRight'}>
                                <i></i>
                            </div>
                        </div>
                        <div className={'order_ImgBottom clearfix'}>
                            <span>花很鲜，很不错</span>
                            <img src="https://img.hua.com/reviewpic/shipai/2018/06/23/6d1186d6e6c34844ae6f503e0ec306b3.jpg" alt=""/>

                            <p className={'zipai'}>花店自拍</p>
                            <p className={'didian'}><Icon type={'environment-o'}/>北京朝阳区</p>
                            <p className={'riqi'}>2018-06-28</p>
                        </div>
                    </div>
                </div>
                <div className={'order_Evaluation'}>
                    <div className={'order_Details clearfix'}>
                        <p className={'clearfix'}>订单详情<span>1037条评价<Icon type={'right'}/></span></p>
                    </div>
                    <div className={'order_Img'}>
                        <div className={'order_ImgTop clearfix'}>
                            <div className={'order_ImgTopLeft'}>
                                <img src="https://img02.hua.com/pc/assets/img/avatar_default_05.jpg" alt=""/>
                                <span>杉*</span>
                            </div>
                            <div className={'order_ImgTopRight'}>
                                <i></i>
                            </div>
                        </div>
                        <div className={'order_ImgBottom clearfix'}>
                            <span>非常好，花很鲜</span>
                            <img src="https://img.hua.com/reviewpic/shipai/2018/06/28/f29f57a2d1104e62b97761ccdac494dd.jpg" alt=""/>

                            <p className={'zipai'}>花店自拍</p>
                            <p className={'didian'}><Icon type={'environment-o'}/>北京朝阳区</p>
                            <p className={'riqi'}>2018-06-28</p>
                        </div>
                    </div>
                </div>

                <div className={'guangao'}>
                    <img src="https://img02.hua.com/m/home/img/m_special_flowers.png" alt=""/>
                </div>
               <div className={'miaoshu'}>
                   <img src="https://img01.hua.com/uploadpic/images/by_20180611134635481.jpg" alt=""/>
                   <img src="https://img01.hua.com/uploadpic/images/by_20180702095709936.jpg" alt=""/>
                   <img src="https://img01.hua.com/uploadpic/images/2015420174953899997.jpg" alt=""/>
                   <img src="https://img01.hua.com/uploadpic/images/20151223184607197772.jpg" alt=""/>
                   <img src="https://img01.hua.com/uploadpic/images/20151223184694302325.jpg" alt=""/>
                   <img src="https://img01.hua.com/uploadpic/images/2015420175007241855.jpg" alt="" className={'four'}/>
                   <img src="https://img01.hua.com/uploadpic/images/by_2018061113485394.jpg" alt=""/>
                   <img src="https://img01.hua.com/uploadpic/images/by_20180611134836454.jpg" alt=""/>
                   <img src="https://img02.hua.com/pc/images/xianhua_cardstyle.jpg" alt=""/>
               </div>
                 <div className='footer_cart clearfix'>
                    <div className='addcar' onClick={this.handleShopCart}>
                        <a href="javascript:;">
                            加入购物车
                        </a>
                    </div>

                    <div className='buy' onClick={this.buy}>
                        <a href="javascript:;">
                            立即购买
                        </a>
                    </div>
                </div>

               {/* <Link to='/shopcart/shopping'>
                    购买详情
                </Link>*/}


                <div>
                    <BackTop>
                        <div className="ant-back-top-inner">
                            <div className={'backTop'}>
                                <img src="http://img02.hua.com/m/icon/arrow_Top.png" alt=""/>
                            </div>
                        </div>
                    </BackTop>
                </div>

            </div>
        )
    }

    go = ev => {
        this.props.history.go(-1)
    }

    handleShopCart = async ev => {
        this.props.history.push('/shopcart')
        let result = await addShopCart(this.courseId)
        if (parseFloat(result.code) === 0) {
            this.props.queryUnpay();//dispatch派发任务：通知redux容器中购物信息进行更新
        }
    }

    buy = ev => {
        this.props.history.push('/shopcart')
    }

}

export default connect(state => ({...state.shopcart, ...state.details}), action.shopcart)(Product)
