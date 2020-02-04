import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import banner1 from '../assets/images/banner/banner1.jpg';
import banner2 from '../assets/images/banner/banner2.jpg';
import banner3 from '../assets/images/banner/banner3.jpg';
import banner4 from '../assets/images/banner/banner4.jpg';
import banner5 from '../assets/images/banner/banner5.jpg';

class GalleryComponent extends Component{
    render(){
        const params = {
            slidesPerView: 3,
            spaceBetween: 30,
            loop:true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            }
          }
        return(
            <div className="gallery bg-gray-200 p-10">
                <h1 className="py-2 primary-color bold text-2xl"> Gallery</h1>
               <Swiper {...params}>
                    <div >
                        <img src={banner1} alt="banner one" className="banner-image" />
                    </div>
                    <div >
                        <img src={banner2} alt="banner one" className="banner-image" />
                    </div>
                    <div >
                        <img src={banner3} alt="banner one" className="banner-image" />
                    </div>
                    <div >
                        <img src={banner4} alt="banner one" className="banner-image" />
                    </div>
                    <div >
                        <img src={banner5} alt="banner one" className="banner-image" />
                    </div>
                </Swiper>
            </div>
        )
    }
}
export default GalleryComponent;