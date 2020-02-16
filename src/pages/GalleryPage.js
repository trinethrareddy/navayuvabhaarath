import React, {Component} from 'react';

import SmallBannerComponent from '../components/SmallBanner';
import subscribeImg from '../assets/images/subscribe.jpg';
import ImageGalleryGrid from '../components/Image-gallery-grid';
import Title from '../components/Title';
class GaleryPage extends Component {
    render() {
        return (
            <div>
                <SmallBannerComponent bgImage={subscribeImg} bannerText="NavaYuva Bharath Gallery" />
                <Title titleName="Image Gallery"></Title>
                <ImageGalleryGrid/>
            </div>
        )
    }
}

export default GaleryPage;