import React from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom'
import {Icon, Carousel,BackTop} from 'antd';
import action from '../../store/action/index';




class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.qeuryBanner();
        this.props.queryList();
    }

    render() {
        let data = this.props.deBannerData;
        let listdata = this.props.queryHome.data;

        if (data.length === 0) return '';

        return <section className={'homeBox'}>
            {/*搜索*/}
            <div className='NavTop clearfix'>
                <h1 className='logo topLeft'>花礼网</h1>
                <div className={'topRight clearfix'}>
                    <Link to='/classify/b1' className={'topRight_one'}><Icon type={'search'} className={'icon'}/><span>年中特惠鲜花</span></Link>
                    <Link to='person/login' className={'topRight_two'}><Icon type={'user'}/></Link>
                </div>
            </div>

            {/*轮播图*/}
            <div className={'homeBanner'}>
                {data && data.length !== 0 ? <Carousel>
                    {data.map((item, index) => {
                        let {pic} = item;
                        return <Link to='/suibianqi' key={index}>
                            <img src={pic} alt=""/>
                        </Link>
                    })}
                </Carousel> : ''}
                <ul className={'descor clearfix'}>
                    <li>认证龙头企业</li>
                    <li>13年品牌</li>
                    <li>3小时送花</li>
                    <li>最近26044条好评</li>
                </ul>
            </div>

            {/* 详情*/}
            <ul className={'classifyPic clearfix'}>
                <li>
                    <Link to='home/homelist'>
                        <i className={'classifyPic1'}></i>
                        <span>鲜花</span>
                    </Link>
                </li>
                <li>
                    <Link to='home/homelist'>
                        <i className={'classifyPic2'}></i>
                        <span>永生花</span>
                    </Link>
                </li>
                <li>
                    <Link to='home/homelist'>
                        <i className={'classifyPic3'}></i>
                        <span>蛋糕</span>
                    </Link>
                </li>
                <li>
                    <Link to='home/homelist'>
                        <i className={'classifyPic4'}></i>
                        <span>礼品</span>
                    </Link>
                </li>
                <li>
                    <Link to='home/homelist'>
                        <i className={'classifyPic5'}></i>
                        <span>巧克力</span>
                    </Link>
                </li>
            </ul>

            {/* 送礼物*/}
            <div>
                <ul className={'giftPepele clearfix'}>
                    <li>
                        <Link to='/home/homelist/love'>
                            <img src="https://img02.hua.com/m/images/m-home-flowercate01.jpg" alt=""/>
                            <p>送恋人</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/home/homelist/family'>
                            <img src="https://img02.hua.com/m/images/m-home-flowercate02.jpg" alt=""/>
                            <p>送父母长辈</p>
                        </Link>
                    </li>
                    <li>
                        <Link to='/home/homelist/friend'>
                            <img src="https://img02.hua.com/m/images/m-home-flowercate03.jpg" alt=""/>
                            <p>送朋友</p>
                        </Link>
                    </li>
                </ul>
                <div className={'use clearfix'}>
                    <Link to='/home/homelist'>
                        <p>生日祝贺</p>
                    </Link>
                    <Link to='/home/homelist'>
                        <p>表白/求婚</p>
                    </Link>
                    <Link to='/home/homelist'>
                        <p>开业/商务</p>
                    </Link>
                    <Link to='/home/homelist'>
                        <p>周年纪念</p>
                    </Link>
                </div>
            </div>

            {/*专区*/}
            <ul className={'specialArea clearfix'}>
                <li>
                    <Link to='/home/homelist'>
                        <img src="https://img02.hua.com/m/images/m-home-recommend01.jpg" alt=""/>
                        <div className={'specialAreaPic'}>
                            <h4>热销排行榜</h4>
                            <p>集万千宠爱</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/home/homelist'>
                        <img src="https://img02.hua.com/m/images/m-home-recommend02.jpg" alt=""/>
                        <div className={'specialAreaPic'}>
                            <h4>新品来袭</h4>
                            <p>新品有新意</p>
                        </div>
                    </Link>
                </li>
                <li className={'specialArea3'}>
                    <Link to='/home/homelist'>
                        <img src="https://img02.hua.com/m/images/m-home-recommend03.jpg" alt=""/>
                        <div className={'specialAreaPic'}>
                            <h4>特价专区</h4>
                            <p>超值好货</p>
                        </div>
                    </Link>
                    <Link to='/home/homelist'>
                        <img src="https://img02.hua.com/m/images/m-home-recommend04.jpg" alt=""/>
                        <div className={'specialAreaPic2'}>
                            <h4>品味之选</h4>
                            <p>精致优雅</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/home/homelist'>
                        <img src="https://img02.hua.com/m/images/m-home-recommend05.jpg" alt=""/>
                        <div className={'specialAreaPic'}>
                            <h4>设计师臻选</h4>
                            <p>稀有花材 高端鲜花</p>
                        </div>
                    </Link>
                    <a href="https://m.hua.com/you/" className={'sendBSG'}>限送北上广深</a>
                </li>
            </ul>

            <div className={'commodity'}>
                <h3>
                    爱情鲜花热销单品
                </h3>
                <ul className={'commodityList clearfix'}>
                    {listdata.map((item, index) => {
                        let {name, detail, pic, dec, price,id} = item;
                        return <li key={index}>
                            <Link to={`/shopcart/product?id=${id}`}>
                                <img src={pic} alt={name}/>
                                <div className={'Typeface'}>
                                    <p>{name} {detail ? <i>•</i> : ''} <span>{detail}</span></p>
                                    <p>{dec}</p>
                                    <p>￥{price}</p>
                                </div>
                            </Link>
                        </li>
                    })}
                </ul>
                <div className={'moreFlower'}>
                    <Link to='home/homelist/love'>
                        <span>更多爱情花<i></i></span>
                    </Link>
                </div>
            </div>
            <div className={'commodity'}>
                <h3>
                    送长辈鲜花热销单品
                </h3>
                <ul className={'commodityList clearfix'}>
                    {listdata.map((item, index) => {
                        let {name, detail, pic, dec, price, id} = item;
                        if (index >= 4) {
                            return ''
                        }
                        return <li key={index}>
                            <Link to={`/shopcart/product?id=${id}`}>
                                <img src={pic} alt={name}/>
                                <div className={'Typeface'}>
                                    <p>{name} {detail ? <i>•</i> : ''} <span>{detail}</span></p>
                                    <p>{dec}</p>
                                    <p>￥{price}</p>
                                </div>
                            </Link>
                        </li>
                    })}
                </ul>
                <div className={'moreFlower'}>
                    <Link to='home/homelist/family'>
                        <span>更多亲情花<i></i></span>
                    </Link>
                </div>
            </div>
            <div className={'commodity'}>
                <h3>
                    永生花热销单品
                </h3>
                <ul className={'commodityList clearfix'}>
                    {listdata.map((item, index) => {
                        let {name, detail, pic, dec, price,id} = item;
                        if (index >= 4) {
                            return ''
                        }
                        return <li key={index}>
                            <Link to={`/shopcart/product?id=${id}`}>
                                <img src={pic} alt={name}/>
                                <div className={'Typeface'}>
                                    <p>{name} {detail ? <i>•</i> : ''} <span>{detail}</span></p>
                                    <p>{dec}</p>
                                    <p>￥{price}</p>
                                </div>
                            </Link>
                        </li>
                    })}
                </ul>
                <div className={'moreFlower'}>
                    <Link to='home/homelist/friend'>
                        <span>更多友情花<i></i></span>
                    </Link>
                </div>
            </div>

            <div className={'reason'}>
                <a href="javascript:;">
                    <img src="https://img02.hua.com/m/home/img/m-brand.png" alt=""/>
                </a>
            </div>

            <footer>
                <ul className={'flowerKnow'}>
                    <li><a href="##">花语大全</a></li>
                    <li><a href="##">查单</a></li>
                    <li><a href="##">关于我们</a></li>
                </ul>
            </footer>

            {/*回到顶部*/}
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

export default connect(state => ({...state.details}), action.details)(Home);



