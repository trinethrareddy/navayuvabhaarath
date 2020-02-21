import React, {Component} from 'react';
import logo from '../assets/images/header-logo2.png';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
class HeaderComponent extends Component {
  componentDidMount() {
    console.log('header', this.refs.header);
    if(this.refs && this.refs.header) {
      window.addEventListener('scroll', this.handleScroll);
    }
  };
    handleScroll = ()=> {
      if(window.pageYOffset > 350 && !this.refs.header.classList.contains('sticky')) {
        this.refs.header.classList.add('sticky');
        this.refs.header.classList.add('secondary-bg-color');
        this.refs.header.classList.add('animated');
        this.refs.header.classList.add('fadeInDown');
      } else if(window.pageYOffset <= 350 && this.refs.header.classList.contains('sticky')) {
        this.refs.header.classList.remove('sticky');
        this.refs.header.classList.remove('secondary-bg-color');
        this.refs.header.classList.remove('animated');
        this.refs.header.classList.remove('fadeInDown');
      }
    };
    componentWillUnmount(){
      window.removeEventListener(this.handleScroll);
    }
  
  render() {
    return (<nav ref="header" className="flex z-10 items-center justify-between flex-wrap px-6 shadow absolute w-full top-0 py-4 md:py-0">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={logo} alt="Logo" className="w-full h-20" />
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded primary-color border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className="w-full block  lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow mr-10 text-lg">   
        {/* <Nav> */}
          <NavLink to="/home" activeClassName="active" className="block mt-4 lg:inline-block lg:mt-0 primary-color hover:text-white mr-4 border-b-2 border-transparent hover:border-white">Home</NavLink>
            <NavLink to="/about-us" activeClassName="active" className="block mt-4 lg:inline-block lg:mt-0 primary-color hover:text-white mr-4 border-b-2 border-transparent hover:border-white">About Us</NavLink>
            <NavLink to="/gallery" activeClassName="active" className="block mt-4 lg:inline-block lg:mt-0 primary-color hover:text-white mr-4 border-b-2 border-transparent hover:border-white">Gallery</NavLink>
            <NavLink to="/media" activeClassName="active" className="block mt-4 lg:inline-block lg:mt-0 primary-color hover:text-white mr-4 border-b-2 border-transparent hover:border-white">Social Media</NavLink>
            <NavLink to="/contact" activeClassName="active" className="block mt-4 lg:inline-block lg:mt-0 primary-color hover:text-white mr-4 border-b-2 border-transparent hover:border-white">Contact Us</NavLink>
            {/* </Nav>        */}
        </div>
        <div>
          <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Donate</a>
        </div>
      </div>
    </nav>)
  }
}
export default HeaderComponent;