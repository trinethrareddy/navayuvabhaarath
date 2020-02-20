import React, {Component} from 'react';
import upArrow from '../assets/icons/up-arrow.svg';
class GotoTop extends Component {
    constructor(){
        super();
        this.state = {
            isShowBtn: false
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', ()=> {           
            if(window.pageYOffset > 300 && !this.state.isShowBtn) {
                this.setState({
                    isShowBtn: true
                });
            } else if (window.pageYOffset <= 300 && this.state.isShowBtn) {
                this.setState({
                    isShowBtn: false
                });
            }
        });
    }
    gotoTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
    render(){
        const isShowBtn = this.state.isShowBtn;
        return(
            isShowBtn && (<div className="fixed go-to-top primary-bg-color animated fadeInUpBig" onClick={this.gotoTop}>
                <img src={upArrow} alt="up" className="w-5"/>
            </div>)
        )
    }
}
export default GotoTop;