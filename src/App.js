import React, { Component } from 'react';
import logo from './NYBCT.jpg';
// import './App.css';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';
class App extends Component {
  /**
   * @memberof App
   * @summary handles button click 
   */
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <div>Welcome to NYBCT</div>
        <div class="global-header bg-white shadow-md h-10">
          <div class="container mx-auto flex items-center h-full">
            <div class="flex-1 max-h-full h-full justify-start flex items-center">
              <svg class="w-24 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88.995 12">
                <g id="Group_876" data-name="Group 876" transform="translate(226 -78.852)">
                  <g id="Group_875" data-name="Group 875" transform="translate(-226 78.852)">
                    <g id="Group_50_1_" transform="translate(24.616 0.316)">
                      <path id="Union_2_1_" d="M312,15.361V12.836h4.418a3.327,3.327,0,0,0,1.231-.245,3.013,3.013,0,0,0,1-.678,3.077,3.077,0,0,0,.678-1,2.973,2.973,0,0,0,.245-1.231,3.31,3.31,0,0,0-.245-1.231,2.993,2.993,0,0,0-.678-1,3.077,3.077,0,0,0-1-.679,2.986,2.986,0,0,0-1.231-.245H312V4h4.418a5.6,5.6,0,0,1,2.209.45,5.375,5.375,0,0,1,.963.521,5.933,5.933,0,0,1,.844.694,5.518,5.518,0,0,1,.694.844,5.681,5.681,0,0,1,.521,5.381,5.373,5.373,0,0,1-.521.963,5.879,5.879,0,0,1-.694.844,5.482,5.482,0,0,1-.844.694,5.708,5.708,0,0,1-3.172.97Z" transform="translate(-312 -4)" />
                    </g>
                    <path id="Union_6_1_" class="fill-logo" d="M18.935,15.361,15.148,7.156l-3.787,8.205H8.836L13.886,4H16.41L21.46,15.361Zm-15.148,0V6.525H0V4H10.1V6.525H6.312v8.836Z" transform="translate(0 -3.684)" />
                    <path id="Union_4_1_" d="M739.787,15.361V6.525H736V4h10.1V6.525h-3.787v8.836Z" transform="translate(-677.933 -3.684)" />
                    <path id="Path_84_1_" d="M848,15.361,853.049,4h2.525l5.049,11.361H858.1l-3.787-8.205-3.787,8.205Z" transform="translate(-781.096 -3.684)" />
                    <rect id="Rectangle_104_1_" width="2.525" height="11.361" transform="translate(36.608 0.316)" />
                    <rect id="Rectangle_110_1_" width="2.525" height="11.361" transform="translate(53.649 0.316)" />
                    <path id="Union_5_1_" d="M1024,15.361V4h2.525v8.836h5.681v2.525Z" transform="translate(-943.211 -3.684)" />
                    <path id="Union_3_1_" d="M523.661,11.519a6.408,6.408,0,0,1-1.018-.552,5.661,5.661,0,0,1-.884-.734,6.05,6.05,0,0,1-.734-.884,6.4,6.4,0,0,1-.552-1.018,6,6,0,0,1,0-4.671,6.4,6.4,0,0,1,.552-1.018,5.579,5.579,0,0,1,.734-.884,6.047,6.047,0,0,1,.884-.734,6.408,6.408,0,0,1,1.018-.552,6,6,0,0,1,4.671,0,6.407,6.407,0,0,1,1.018.552,5.671,5.671,0,0,1,.726.576L528.3,3.377a3.486,3.486,0,0,0-3.661-.592,3.413,3.413,0,0,0-1.112.75,3.482,3.482,0,0,0-.75,3.826,3.438,3.438,0,0,0,.75,1.112,3.482,3.482,0,0,0,3.826.75,3.369,3.369,0,0,0,.852-.513V6h2.525V9.68a4.788,4.788,0,0,1-.5.56,6.05,6.05,0,0,1-.884.734,6.407,6.407,0,0,1-1.018.552A5.938,5.938,0,0,1,526,12,6.092,6.092,0,0,1,523.661,11.519Z" transform="translate(-478.974 0)" />
                  </g>
                </g>
              </svg>

              <span class="ml-2 mr-2 text-black">|</span>
              <span class="text-gray-600">CSS Components</span>
            </div>
            <div>

            </div>
          </div>
        </div>
        <div>
        India is still a developing country, one burdened with enormous inequities. Its our duty to play whatever role we can, whichever way we can, to diminish those disparities. We are not in it for propaganda are visibility . Rather we are in it for the satisfaction gained from knowing that we have achieved something meaningful, that we have put our shoulder to the wheel of nation building, that we are serving the country that provides us sustenance
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
