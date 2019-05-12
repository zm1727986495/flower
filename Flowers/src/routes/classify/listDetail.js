import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Qs from 'qs'
import action from '../../store/action/index';
import {Icon} from 'antd';


class listDetail extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    commonFn = (nextProps) => {
        // let {id = 1} = Qs.parse(nextProps.location.search.substr(1)) || {};
        let {id = 1, title = '热门推荐'} = nextProps.match.params;
        let {classifyData} = this.props;
        let obj = classifyData.find((item, index) => {
            return parseFloat(item.id) === parseFloat(id);
        });
        this.classTypes = obj.classTypes;
        this.title = title;
    };

    componentWillReceiveProps(nextProps) {
        this.commonFn(nextProps);
    }

    componentWillMount() {
        this.commonFn(this.props);
    }

    render() {
        let {classTypes = []} = this;
        let {classifyData} = this.props;

        return <div className='picDetails active'>
            <div className='picBox'>
                {classTypes.map((item, index) => {
                    return <Link key={index} className='listBanner' to={'/suibianqi'}>
                        <img src={item.pic} alt=""/>
                        <p className='list_desc'>{item.des}</p>
                    </Link>
                })}

            </div>
            <div className='listBottom'>

                <h3><Icon type='gift' style={{marginRight:'.1rem'}}/>{this.title}</h3>
                <div className='listPic'>
                    <ul>
                        {classTypes.map((item, index) => {

                            return item.classList.map((item, index) => {
                                let {img, dec} = item;
                                return <Link to='/home/homelist' key={index}>
                                    <li>
                                        <img src={img} alt=""/>
                                        <p>{dec}</p>
                                    </li>
                                </Link>
                            })
                        })}
                    </ul>
                </div>
            </div>
        </div>
    }
}

export default connect(state => ({...state.classify}), action.classify)(listDetail);