import React, {Component} from 'react';
import BannerComponent from '../components/Banner';
import GalleryComponent from '../components/Gallery';
import AboutComponent from '../components/About'
class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <BannerComponent/>
        <AboutComponent/>
        <GalleryComponent/>
      </div>
    )
  }
}
export default HomePage;