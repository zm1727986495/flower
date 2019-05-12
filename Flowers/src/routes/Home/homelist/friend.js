import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import action from "../../../store/action/index";
import {queryFriend} from '../../../api/details';


class friend extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.n = 0;
        this.state = {
            isLoading: false,
        }
    }


    componentWillMount() {
        let {queryfriend} = this.props;
        !queryfriend ? queryFriend() : null;
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
                this.props.queryFriend(this.n);
                this.props.querySortFriend(this.n)
            }
        };


    }

    componentWillUpdate() {
        let {querysortfriend} = this.props;
        !querysortfriend ? queryFriend() : null;
        let {data} = querysortfriend;
        data.sort((a, b) => {
            return a.price - b.price
        });
        this.props.queryfriend.data=data
    }
    componentWillReceiveProps() {
        this.setState({
            isLoading: false
        })
    }
    render() {
        let {queryfriend} = this.props;
        if (!queryfriend) return '';
        let lovedata=this.props.queryfriend.data;
        return <div>
            <ul className={'commodityList clearfix'}>
                {lovedata.map((item, index) => {
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

export default connect(state => ({...state.details}), action.details)(friend);