import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav >
            <div>
                <Link to = "/" >LOGO</Link>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/intro">intro</Link></li>
                    <li><Link to="/shopping">shopping</Link></li>
                </ul>
            </div>
            </nav>
        );
    }
}

Navbar.propTypes = {

};

export default Navbar;