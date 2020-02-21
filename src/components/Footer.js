import React, { Component } from 'react';
import { NavLink, BrowserRouter as Router, } from 'react-router-dom';
class FooterComponent extends Component {
  render() {
    return (
      <nav className="footer secondary-bg-color shadow py-4 md:py-0">
        <div className="px-6 overlay">
          <div className="md:flex justify-between flex-wrap">
            <div className="md:flex text-white justify-between md:p-4 md:w-2/3">
              {/* Projects */}
              <div className="">
                <div className="py-1 font-bold text-lg">Projects</div>
                <ul className="list-reset">
                  <li className="py-1"><a href="#">Awerness rural infrastructure </a></li>
                  <li className="py-1"><a href="#">HealthCare</a></li>
                  <li className="py-1"><a href="#">Edu care</a></li>
                </ul>
              </div>
              <div className="">
                <div className="py-1 font-bold text-lg">Useful links</div>
                <Router>
                  <ul className="list-reset p-0">
                    <li className="py-1">
                      <NavLink to="/home">Home</NavLink>
                    </li>
                    <li className="py-1">
                      <NavLink to="/about-us">About Us</NavLink>
                    </li>
                    <li className="py-1">
                      <NavLink to="/gallery">Gallery</NavLink>
                    </li>
                    <li className="py-1">
                      <NavLink to="/media">Social Media</NavLink>
                    </li>
                    <li className="py-1">
                      <NavLink to="/contact">Contact Us</NavLink>
                    </li>
                    <li className="py-1">
                      <NavLink to="/donate">Donate</NavLink>
                    </li>
                  </ul>
                </Router>
              </div>
              <div>
                <div className="py-1 font-bold text-lg">Address</div>
                <ul className="list-reset">
                  <li className="py-1">
                    NAVAYUVA BHARATH
            </li>
                  <li className="py-1">
                    Rudrampet Bypass
            </li>
                  <li className="py-1">
                    Anantapur- 515004
            </li>
                  <li className="py-1">
                    Andhrapradesh
            </li>
                  <li className="py-1">
                    <a href="tel:090005 73185">090005 73185</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center text-white pt-4 md:w-1/3">
              <div className="py-1 font-bold text-lg pb-4">Spread The Word</div>
              <ul className="list-reset flex text-white justify-center">
                <li className="mr-6 primary-bg-color rounded-full w-8 h-8 flex items-center justify-center hover:bg-white hover:text-gray-500">
                  <a href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="mr-6 primary-bg-color rounded-full w-8 h-8 flex items-center justify-center hover:bg-white hover:text-gray-500">
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="mr-6 primary-bg-color rounded-full w-8 h-8 flex items-center justify-center hover:bg-white hover:text-gray-500">
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="mr-6 primary-bg-color rounded-full w-8 h-8 flex items-center justify-center hover:bg-white hover:text-gray-500">
                  <a href="">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </li>
                <li className="mr-6 primary-bg-color rounded-full w-8 h-8 flex items-center justify-center hover:bg-white hover:text-gray-500">
                  <a href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-white text-center border-t p-4">
            Copyright © Nava Yuva Bharath Charitable trust
        </div>
        </div>
      </nav>
    )
  }
}
export default FooterComponent;