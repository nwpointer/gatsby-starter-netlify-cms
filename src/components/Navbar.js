import React from 'react';
import Link from 'gatsby-link';

import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';

export default class Navbar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {active:false}
  }
  render(){
    const {active} = this.state;
    const isActive= active ? 'is-active' : '';
    const toggle = ()=>this.setState({active:!active})
    return(
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img src="https://theverygreengrocer.co.uk/wp-content/uploads/2016/06/IMG_1137.png" alt=""/>
              <b id="logotype">Gooseberry Doulas</b>
            </Link>
            <div className={`navbar-burger ${isActive}`} onClick={toggle}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={`navbar-menu ${isActive}`}>
            <div className="navbar-end" onClick={toggle} >
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/services">
                Services
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
