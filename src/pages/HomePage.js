import React, {Component} from 'react';
import BannerComponent from '../components/Banner';
import GalleryComponent from '../components/Gallery';
import AboutComponent from '../components/About';
import HelpUsComponent from '../components/HelpUs';
import SubscribeComponent from '../components/Subscribe';
class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <BannerComponent/>
        <AboutComponent/>
        <HelpUsComponent/>
        <SubscribeComponent/>
        <GalleryComponent/>
      </div>
    )
  }
}
export default HomePage;