import React from 'react'
import Slider from '../../components/Slider/Slider'
import './home.scss';
import Featured from '../../components/Featured/Featured';
import Grid from '../../components/Grid/Grid';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <Featured type="Featured"/>
      <Grid />
      <Featured type="Trending"/>
      <Contact />
    </div>
  )
}

export default Home