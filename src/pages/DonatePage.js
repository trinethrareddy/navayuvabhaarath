import React , {Component} from 'react';
import SmallBannerComponent from '../components/SmallBanner';
import subscribeImg from '../assets/images/subscribe.jpg';
class DonatePage extends Component {
    render() {
        return(
          <React.Fragment>
               <SmallBannerComponent bgImage={subscribeImg} bannerText="HELP US BY DONATING" />
          </React.Fragment>
        )
    }
}
export default DonatePage;