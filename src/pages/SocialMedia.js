import React, { Component } from 'react';

class SocialMedia extends Component {
    render() {
        return (
            <div class="md:flex md:flex-row bg-gray-200 py-5">
                <div class="text-gray-700 text-center px-4 py-2 m-2 w-full md:w-1/2">
                    <div id="fb-root"></div>
                    <div class="fb-page" data-href="https://www.facebook.com/NavaYuvaBharatCharitableTrust" data-tabs="timeline, events" data-width="500" data-height="550" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/NavaYuvaBharatCharitableTrust" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/NavaYuvaBharatCharitableTrust">Nava Yuva Bharat Charitable Trust</a></blockquote></div>
                </div>
                <div class="text-gray-700 text-center px-4 py-2 m-2 w-full md:w-1/2">
                    <iframe
                        style={{
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        }}
                        src={`https://www.youtube.com/embed/yVCYMuYklcM`}
                        frameBorder="0"
                    />
                </div>
            </div>
        )
    }
}
export default SocialMedia;