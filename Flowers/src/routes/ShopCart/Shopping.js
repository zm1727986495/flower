import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link,Route,Switch} from 'react-router-dom';
import Addcart from './addcart/Addcart';
import Emptycart from './addcart/Emptycart';
import Daifukuan from './addcart/Daifukuan';
import '../../static/css/Addcart.less';


class Shopping extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
               <Addcart/>
               {/*<Emptycart/>*/}
               {/*<Daifukuan/>*/}
            </div>
        )
    }
}

export default connect()(Shopping)
