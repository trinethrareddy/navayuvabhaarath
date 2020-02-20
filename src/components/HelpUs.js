import React, { Component } from 'react';
import image2 from '../assets/images/image2.jpg';
import Title from '../components/Title';
import ScrollAnimation from 'react-animate-on-scroll';
class HelpUsComponent extends Component {
    render() {
        return (
            <div className="help-us mb-20">
                <ScrollAnimation animateIn="fadeInUp">
                    <Title titleName="Help Us" />
                    <div className="md:flex md:w-4/5 ml-auto mr-auto p-10 md:p-0">
                        <div className="w-full md:w-1/2">
                            <img src={image2} alt="alt img" className="h-64 ml-auto mr-auto md:mr-10" />
                        </div>
                        <div className="w-full md:w-1/2 pt-8 md:pt-0">
                            <h3>HELP OUR CAUSE</h3>
                            <h5> Rs 500/-</h5>
                            <p> Your support and contributions will enable us to meet our goals and improve conditions. Your generous donation will fund our mission.</p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default HelpUsComponent;