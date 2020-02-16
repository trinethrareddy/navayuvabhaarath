import React, {Component} from 'react';

class GoogleMap extends Component {
    render() {
        return(
            <div className="w-full">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.765887345304!2d77.58352231461765!3d14.669223179324588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14aeb37c2f6b1%3A0xa161f33c6207eae5!2sRam%20Nagar%20Bridge%20%26%20Rudrampeta%20Rd%2C%20Kovur%20Nagar%2C%20Anantapur%2C%20Andhra%20Pradesh%20515004!5e0!3m2!1sen!2sin!4v1581257498292!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen=""></iframe>
            </div>
        );
    }
}
export default GoogleMap;