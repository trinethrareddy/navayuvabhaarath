import React, { Component } from 'react';

import SmallBannerComponent from '../components/SmallBanner';
import contactUsImg from '../assets/images/contactus_hd_bg.png';
import whatsappIcon from '../assets/images/whatsapp.svg';

import GoogleMap from '../components/GoogleMap';
import SubscribeComponent from '../components/Subscribe';
class ContactUs extends Component {
    render() {
        return (
            <React.Fragment>
                <SmallBannerComponent bgImage={contactUsImg} bannerText="CONTACT US" />
                <div className="text-center mb-8">
                    <div className="font-bold text-center mt-8 text-xl">FIND MORE WAYS TO HELP!</div>
                    <div className="mx-48 my-12 text-gray-600">
                        <p className="text-center">
                            A nonprofit is as strong as the community that holds it up. Together, we can do more than we can do alone. Let's bring our abilities and passions together to affect real change.
                    </p>
                        <p className="text-center mt-8">
                            There are many ways to join us and support our mission. Contact us to find out  more about volunteer opportunities, fundraising events, and ways that you can get  our message to your friends and family.
                    </p>
                    </div>
                    <button className="bg-gray-600 hover:bg-gray-900 text-white  py-2 px-4 rounded">
                        <a href="https://wa.me/919000573185">
                    <img src={whatsappIcon} className="inline mr-2 h-8"/>Message us on Whatsapp </a></button>
                    <div className="font-bold mt-4 mb-2">
                        
                        NAVAYUVA BHARATH</div>
                    <p className="text-gray-600 mb-2">Rudrampet Bypass Anantapur- 515004</p>
                    <p className="text-orange-700 mb-2">090005 73185</p>                    
                </div>
                <div className="mb-12">
                    <SubscribeComponent/>
                </div>
                <GoogleMap/>
            </React.Fragment>
        )
    }
}
export default ContactUs;