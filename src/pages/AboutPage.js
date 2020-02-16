import React, {Component} from 'react';
import SmallBannerComponent from '../components/SmallBanner';
import subscribeImg from '../assets/images/subscribe.jpg';
import GalleryComponent from '../components/Gallery';
class AboutPage extends Component {
  render() {
    return (
      <div>
      <SmallBannerComponent bgImage={subscribeImg} bannerText="About Us NavaYuva Bharath"/>
        <GalleryComponent/>
      </div>
      
    )
  }
}
export default AboutPage;