import React, {Component} from 'react';

import SmallBannerComponent from '../components/SmallBanner';
import subscribeImg from '../assets/images/subscribe.jpg';
class GaleryPage extends Component {
    render() {
        return (
            <div>
                <SmallBannerComponent bgImage={subscribeImg} bannerText="NavaYuva Bharath Gallery" />
            </div>
        )
    }
}

export default GaleryPage;