import React from 'react';
import ReactDOM from 'react-dom';
import './styles/animated.css';
import './styles/tailwind.css';
import './styles/main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import 'swiper/css/swiper.css'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import configureStore from './store';
// Components 
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';
import GotoTop from './components/GotoTop';
// Page Components 
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GenericNotFound from './pages/PageNotFound';
import SocialMedia from './pages/SocialMedia';
import GaleryPage from './pages/GalleryPage';
import ContactUs from './pages/ContactUs';
const routing = (
    <Provider store={configureStore()}>
        <Router>
        <HeaderComponent />
            <Switch>
                <Route path="/home">
                    <HomePage />
                </Route>
                <Route path="/about-us">
                    <AboutPage />
                </Route>
                <Route path="/gallery">
                    <GaleryPage />
                </Route>
                <Route path="/media">
                    <SocialMedia />
                </Route>
                <Route path="/contact">
                    <ContactUs />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
                <Route path="*">
                    <GenericNotFound />
                </Route>
            </Switch>
        </Router>
        <FooterComponent />
        <GotoTop/>
    </Provider>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
