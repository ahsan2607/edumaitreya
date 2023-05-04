import React from 'react';
import {useEffect} from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavigationBar from './components/navbar.js';
import Carousel from './components/carousel.js';
import AboutUs from './components/about.js';
import Service from './components/service.js';
import Team from './components/team.js';
import Footer from './components/footer.js';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
    <NavigationBar />
    <Carousel/>
    <AboutUs/>
    <Service/>
    <Team/>
    <Footer/>
    </div>
  );
}
export default App;