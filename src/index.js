import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import './styles/main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import 'swiper/css/swiper.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import configureStore from './store';
// Components 
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';
// Page Components 
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GenericNotFound from './pages/PageNotFound';
import SocialMedia from './pages/SocialMedia';
import GaleryPage from './pages/GalleryPage';
import ContactUs from './pages/ContactUs';
const routing = (
    <Provider store={configureStore()}>
        <HeaderComponent />
        <Router>
            <Switch>                
                <Route exact path="/" component={HomePage} />
                <Route path="/home" component={HomePage} />
                <Route path="/about-us" component={AboutPage} />
                <Route path="/gallery" component = {GaleryPage}/>
                <Route path="/media" component={SocialMedia} />
                <Route path="/contact" component={ContactUs} />
                
                {/* this GenericNotFound path should be at the bottom */}
                <Route path='*' exact={true} component={GenericNotFound} />
                
            </Switch>
        </Router>
        <FooterComponent />
    </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
