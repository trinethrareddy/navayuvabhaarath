import React, {Component} from 'react';
import subscribeImg from '../assets/images/subscribe.jpg';

class SmallBannerComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const bgImage = this.props.bgImage || subscribeImg;
        const bannerText = this.props.bannerText || 'NavaYuva Bharath';
        return(
            <div className="bg-fixed bg-no-repeat bg-cover bg-center flex justify-center text-white py-10 object-center" style={{'backgroundImage': `url(${bgImage})`}}>
                <h2 className="m-10 md:m-16 text-2xl md:text-2xl text-center text-white">{bannerText}</h2>
            </div>
        )
    }
}
export default SmallBannerComponent;