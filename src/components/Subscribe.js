import React, { Component } from "react";
import subscribeImg from '../assets/images/subscribe.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
class SubscribeComponent extends Component {
    render() {
        return (
            <div className="subscribe">
                <ScrollAnimation animateIn="fadeInUp">
                    <div className="bg-fixed bg-no-repeat bg-cover bg-center flex justify-center text-white py-10" style={{ 'backgroundImage': `url(${subscribeImg})` }}>
                        <div className="text-center p-10 md:p-0">
                            <h3 className="mb-5 text-3xl font-bold"> SUBSCRIBE</h3>
                            <p className="text-xl">Learn more about our upcoming events, fundraisers, and more!</p>
                            <input type="email" className="w-full h-12 rounded-sm mt-5 mb-10 pl-5" placeholder="Enter Email ..." />
                            <button className="fancy-btn font-semibold py-3 px-8 border bg-transparent shadow uppercase text-sm text-white">
                                Subscribe
                    </button>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}
export default SubscribeComponent;