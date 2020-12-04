import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './NavItem.css';

class NavItem extends Component {

    render() {
        return(
            <li>
                <Link className="nav-link" to={this.props.tolink} >
                    {this.props.item}
                </Link>
            </li>
        )
    }
}

export default NavItem;