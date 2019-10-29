import React, {Component} from 'react';
import logo from './logo.svg';

class Header extends Component {


    render() {
        return(
            <div className="Header">
                <img className="logo" width="30%" src={logo} alt="logo" />
                <h1>Hello World!!!</h1>
                <p>THIS IS A RANDOM QUOTE</p>
            </div>
        )
    }

}
export default Header;