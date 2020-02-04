import React, { Component } from 'react';
import banner1 from '../assets/images/banner/banner1.jpg';
class AboutComponent extends Component {
    render() {
        return (
            <div className="about p-10">
                 <h1 className="py-2 primary-color bold text-2xl"> About</h1>
                <div class="max-w-sm w-full lg:max-w-full lg:flex">
                    <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{"background-image": `url(${banner1})`}} title="Woman holding a mug">
                    </div>
                    <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div class="mb-8">
                            <div class="text-gray-900 font-bold text-xl mb-2">Nava Yuva Bharath Charitable Trust</div>
                            <p class="text-gray-700 text-base">India is still a developing country, one burdened with enormous inequities. Its our duty to play whatever role we can, whichever way we can, to diminish those disparities. We are not in it for propaganda are visibility . Rather we are in it for the satisfaction gained from knowing that we have achieved something meaningful, that we have put our shoulder to the wheel of nation building, that we are serving the country that provides us sustenance</p>
                            <p class="text-gray-700 text-base mt-8">Smt Vani Gaddam alias Mounika Reddy having born at Velikallu village in Nellore district of Andhra Pradesh, had a passion for community work since young age . Parents are late Smt Jayasree & Sri Chelikam Venkata Reddy infused values in her life. Accordingly with the blessings of elders and wishes of well-wishers.... inspired by SWAMY VIVEKANANDA , MAHATHMA GANDHI, MOTHER THERESA. The mission is on motivating, inspiring, encouraging ,involving , innovating while serving the country men</p>
                        </div>
                        <div class="flex items-center">
                            <img class="w-10 h-10 rounded-full mr-4" src={banner1} alt="Avatar of Jonathan Reinink" />
                            <div class="text-sm">
                                <p class="text-gray-900 leading-none">Chandra Mohan Reddy</p>
                                <p class="text-gray-600">Aug 18</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AboutComponent;