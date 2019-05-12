import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import action from "../../../store/action/index";
import {queryAll} from '../../../api/details';


class all extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.n = 0;
        this.state = {
            isLoading: false,
            flag:"asc"
        }
    }


    componentWillMount() {
        let {queryall} = this.props;
        !queryall ? queryAll() : null;
    }

    componentDidMount() {
        window.onscroll = () => {
            let winH = document.documentElement.clientHeight,
                pageH = document.documentElement.scrollHeight,
                scrollT = document.documentElement.scrollTop;
            if ((scrollT + 200) >= (pageH - winH)) {
                if (this.state.isLoading) return;
                this.setState({isLoading: true});
                this.n += 5;
                this.props.queryAll(this.n);
                this.props.querySortAll(this.n)
            }
        };


    }

    componentWillUpdate() {
        let {querysortall} = this.props;
        !querysortall ? queryAll() : null;
        let {data} = querysortall;
        data.sort((a, b) => {
            return a.price - b.price
        });
        if(this.state.flag==="asc"){
            this.props.queryall.data=data
        }
    }
    componentWillReceiveProps() {
        this.setState({
            isLoading: false
        })
    }
    render() {
        let {queryall} = this.props;
        if (!queryall) return '';
        let alldata=this.props.queryall.data;
        return <div>
            <ul className={'commodityList clearfix'}>
                {alldata.map((item, index) => {
                    let {name, detail, pic, dec, price, id} = item;
                    return <li key={index} data-price={price}>
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
        </div>
    }
}

export default connect(state => ({...state.details}), action.details)(all);