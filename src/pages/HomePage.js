import React, {Component} from 'react';
import BannerComponent from '../components/Banner'
class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <BannerComponent/>
      </div>
    )
  }
}
export default HomePage;