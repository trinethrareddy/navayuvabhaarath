import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import banner1 from '../assets/images/banner/banner1.jpg';
import banner2 from '../assets/images/banner/banner2.jpg';
import banner3 from '../assets/images/banner/banner3.jpg';
import banner4 from '../assets/images/banner/banner4.jpg';
import banner5 from '../assets/images/banner/banner5.jpg';
class BannerComponent extends Component {
    componentDidMount() {
        fetch('https://trinethra.herokuapp.com/banners')
        .then(res => res.json())
        .then((data) => {
          console.log('API response::', data);
        })
        .catch(console.log)
      }

    render() {
        const params = {
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 4500000,
                disableOnInteraction: true
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            spaceBetween: 0
        }
      
        return (
            <div className="banner">
                <Swiper {...params}>
                    <div className="md:h-screen">
                        <div className="banner__heading absolute text-white ">
                            <h1 className="text-2xl md:text-4xl">TOGETHER WE CAN. NAVAYUVA BHARATH</h1>
                            <div className="hidden md:block banner-sub-title"> Giving back through life-changing experiences.</div>
                        </div>
                        <img src={banner1} alt="banner one" className="banner-image" />
                    </div>
                    <div className="md:h-screen">
                        <div className="banner__heading absolute text-white">
                            <h1 className="text-2xl md:text-4xl">TOGETHER WE CAN. NAVAYUVA BHARATH</h1>
                            <div className="hidden md:block banner-sub-title"> Giving back through life-changing experiences.</div>
                        </div>
                        <img src={banner2} alt="banner one" className="banner-image" />
                    </div>
                    <div className="md:h-screen">
                        <div className="banner__heading absolute text-white">
                            <h1 className="text-2xl md:text-4xl">TOGETHER WE CAN. NAVAYUVA BHARATH</h1>
                            <div className="hidden md:block banner-sub-title"> Giving back through life-changing experiences.</div>
                        </div>
                        <img src={banner3} alt="banner one" className="banner-image" />
                    </div>
                    <div className="md:h-screen">
                        <div className="banner__heading absolute text-white">
                            <h1 className="text-2xl md:text-4xl">TOGETHER WE CAN. NAVAYUVA BHARATH</h1>
                            <div className="hidden md:block banner-sub-title"> Giving back through life-changing experiences.</div>
                        </div>
                        <img src={banner4} alt="banner one" className="banner-image" />
                    </div>
                    <div className="md:h-screen">
                        <div className="banner__heading absolute text-white">
                            <h1 className="text-2xl md:text-4xl">TOGETHER WE CAN. NAVAYUVA BHARATH</h1>
                            <div className="hidden md:block banner-sub-title"> Giving back through life-changing experiences.</div>
                        </div>
                        <img src={banner5} alt="banner one" className="banner-image" />
                    </div>
                </Swiper>
            </div>
        )
    }
}
export default BannerComponent;