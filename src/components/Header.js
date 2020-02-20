import React, {Component} from 'react';
import logo from '../assets/images/header-logo2.png';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
class HeaderComponent extends Component {
  render() {
    return (<nav className="flex z-10 items-center justify-between flex-wrap secondary-bg-color px-6 shadow sticky top-0 py-4 md:py-0">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={logo} alt="Logo" className="w-full h-20" />
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded primary-color border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className="w-full block  lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow mr-10 text-base">   
        {/* <Nav> */}
          <NavLink to="/home" activeClassName="active" className="block mt-4 lg:inline-block lg:mt-0 primary-color hover:text-white mr-4">Home</NavLink>
            <NavLink to="/about-us" activeClassName="active" className="block mt-4 lg:inline-block lg:mt-0 primary-color hover:text-white mr-4">About Us</NavLink>
            <NavLink to="/gallery" activeClassName="active" className="block mt-4 lg:inline-block lg:mt-0 primary-color hover:text-white mr-4">Gallery</NavLink>
            <NavLink to="/media" activeClassName="active" className="block mt-4 lg:inline-block lg:mt-0 primary-color hover:text-white mr-4">Social Media</NavLink>
            <NavLink to="/contact" activeClassName="active" className="block mt-4 lg:inline-block lg:mt-0 primary-color hover:text-white mr-4">Contact Us</NavLink>
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