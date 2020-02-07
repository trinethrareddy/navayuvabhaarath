import React, {Component} from 'react';
class Title extends Component {
    constructor(props) {
        super(props)
    }
    render (){
        return (
            <h2 className="flex justify-center my-4 uppercase">{this.props.titleName}</h2>
        )
    }
}
export default Title;