import React, {Component} from 'react';
import pageNotFoundImage from '../assets/images/not-found.svg'
class GenericNotFound extends Component {
    render() {
        return(
            <div className="container mx-auto flex flex-center justify-center my-10">
                <img src={pageNotFoundImage} alt="Page Not Found"/>
            </div>
        )
    }
}
export default GenericNotFound;