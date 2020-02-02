import React, {Component} from 'react';
class FooterComponent extends Component {
  render() {
    return (<nav className="flex items-center justify-between flex-wrap secondary-bg-color px-6 shadow sticky top-0 py-4 md:py-0">
      <div className="flex items-center text-white mr-6 p-4">
      Copyright © Nava Yuva Bharath Charitable trust
      </div>
      <div className="flex">
        <ul className="list-reset flex text-white">
          <li className="mr-6 primary-bg-color rounded-sm w-8 h-8 flex items-center justify-center hover:bg-white hover:text-gray-500">
            <a href="">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="mr-6 primary-bg-color rounded-sm w-8 h-8 flex items-center justify-center hover:bg-white hover:text-gray-500">
            <a href="">
            <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="mr-6 primary-bg-color rounded-sm w-8 h-8 flex items-center justify-center hover:bg-white hover:text-gray-500">
            <a href="">
            <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="mr-6 primary-bg-color rounded-sm w-8 h-8 flex items-center justify-center hover:bg-white hover:text-gray-500">
            <a href="">
            <i className="fab fa-pinterest-p"></i>
            </a>
          </li>
          <li className="mr-6 primary-bg-color rounded-sm w-8 h-8 flex items-center justify-center hover:bg-white hover:text-gray-500">
            <a href="">
            <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>)
  }
}
export default FooterComponent;