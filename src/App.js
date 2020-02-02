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
        <div className="flex bg-gray-200">
          <div className="max-w-sm overflow-hidden mx-3 my-8">
            <div className="rounded border border-white bg-white hover:border hover:border-black">
              <p className="text-teal-700 text-sm font-semibold pt-2 pl-4">New in 2019</p>
              <img className="w-full " src="http://localhost:7678/assets/quantum-tv.png" alt="Sunset in the mountains" />
            </div>

            <div className="mt-8">
              <div className="font-bold text-gray-700 text-2xl mb-2">75” P-Series®  Quantum</div>
              <p className="text-gray-600 text-base">
                ,699.99
      </p>
            </div>
          </div>

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
