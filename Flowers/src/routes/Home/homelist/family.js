import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import action from "../../../store/action/index";
import {queryFamily} from '../../../api/details';


class family extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.n = 0;
        this.state = {
            isLoading: false,
        }
    }


    componentWillMount() {
        let {queryfamily} = this.props;
        !queryfamily ? queryFamily() : null;
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
                this.props.queryFamily(this.n);
                this.props.querySortFamily(this.n)
            }
        };


    }

    componentWillUpdate() {
        let {querysortfamily} = this.props;
        !querysortfamily ? queryFamily() : null;
        let {data} = querysortfamily;
        data.sort((a, b) => {
            return a.price - b.price
        });
        this.props.queryfamily.data=data
    }
    componentWillReceiveProps() {
        this.setState({
            isLoading: false
        })
    }
    render() {
        let {queryfamily} = this.props;
        if (!queryfamily) return '';
        let lovedata=this.props.queryfamily.data;
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

export default connect(state => ({...state.details}), action.details)(family);