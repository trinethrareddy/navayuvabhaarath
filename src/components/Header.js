import React, {Component} from 'react';
import logo from '../assets/images/header-logo2.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';
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
          <Router>
            <a href="/home" className="block mt-4 lg:inline-block lg:mt-0 primary-color hover:text-white mr-4">Home</a>            
            <a href="/about-us" className="block mt-4 lg:inline-block lg:mt-0 primary-color hover:text-white mr-4">About Us</a>
            <a href="/gallery" className="block mt-4 lg:inline-block lg:mt-0 primary-color hover:text-white mr-4">Gallery</a>
            <a href="/media" className="block mt-4 lg:inline-block lg:mt-0 primary-color hover:text-white mr-4">Social Media</a>
            <a href="/contact" className="block mt-4 lg:inline-block lg:mt-0 primary-color hover:text-white mr-4">Contact Us</a>

          {/* <Link to="/home" className="block mt-4 lg:inline-block lg:mt-0 primary-color hover:text-white mr-4">Home</Link> */}
            {/* <Link to="/about-us" className="block mt-4 lg:inline-block lg:mt-0 primary-color hover:text-white mr-4">About Us</Link>
            <Link to="/gallery" className="block mt-4 lg:inline-block lg:mt-0 primary-color hover:text-white mr-4">Gallery</Link>
            <Link to="/media" className="block mt-4 lg:inline-block lg:mt-0 primary-color hover:text-white mr-4">Social Media</Link>
            <Link to="/contact" className="block mt-4 lg:inline-block lg:mt-0 primary-color hover:text-white mr-4">Contact Us</Link> */}
          </Router>
        </div>
        <div>
          <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Donate</a>
        </div>
      </div>
    </nav>)
  }
}
export default HeaderComponent;