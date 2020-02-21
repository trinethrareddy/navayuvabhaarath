import React, { Component } from 'react';
import Title from './Title';
import missionIcon from '../assets/images/mission.svg';
import ourTeamIcon from '../assets/images/team_spirit.svg'
import historyIcon from '../assets/images/good_team.svg';
import ScrollAnimation from 'react-animate-on-scroll';
class AboutComponent extends Component {
    render() {
        return (
            <ScrollAnimation animateIn="fadeInUp">
                <div className="about p-4 md:p-10 animated fadeInUp">
                    <Title titleName="About Us"></Title>
                    <div className="w-full md:flex">
                        <div className="w-full md:w-1/3 text-center mb-10 md:px-12">
                            <div className="flex justify-center my-10">
                                <img src={ourTeamIcon} alt="banner one" className="banner-image w-24" />
                            </div>
                            <div className="font-bold text-xl mb-2">
                                OUR TEAM
                        </div>
                            <p className="text-gray-700 text-base">
                                Our amazing team of regulars and part-time volunteers are committed to helping others. We take our convictions and turn them into action. Think you would be a good fit? Get in touch for more information!
                        </p>
                        </div>
                        <div className="w-full md:w-1/3 text-center mb-10 md:px-12">
                            <div className="flex justify-center my-10">
                                <img src={historyIcon} alt="banner one" className="banner-image w-24" />
                            </div>
                            <div className="font-bold text-xl mb-2">
                                OUR HISTORY
                        </div>
                            <p className="text-gray-700 text-base">
                                Seeing a need for energetic, nonprofit work in this area, we formed our organization to provide sensible solutions. We've consistently grown since then, all thanks to the helping hands of this amazing community!
                        </p>
                        </div>
                        <div className="w-full md:w-1/3 text-center mb-10 md:px-12">
                            <div className="flex justify-center my-10">
                                <img src={missionIcon} alt="banner one" className="banner-image w-24" />
                            </div>
                            <div className="font-bold text-xl mb-2">
                                OUR MISSION
                        </div>
                            <p className="text-gray-700 text-base">
                                We focus on making the maximum positive effort for our community. Our members and volunteers provide the momentum that helps us affect change. Using data driven models, we provide solutions that make a long-lasting difference.
                        </p>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        )
    }
}
export default AboutComponent;