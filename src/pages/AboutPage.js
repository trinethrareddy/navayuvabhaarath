import React, {Component} from 'react';
import SmallBannerComponent from '../components/SmallBanner';
import subscribeImg from '../assets/images/subscribe.jpg';
class AboutPage extends Component {
  render() {
    return (
      <SmallBannerComponent bgImage={subscribeImg} bannerText="About Us NavaYuva Bharath"/>
    )
  }
}
export default AboutPage;