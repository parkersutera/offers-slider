import React, { Component } from 'react';
import Slider from './components/OffersSlider'
import './App.scss'

const offers = [
  {
    id: 1,
    image: '/images/starbucks.png',
    title: 'Starbucks Coffee'
  },
  {
    id: 2,
    image: '/images/shell.jpg',
    title: 'Shell Gasoline'
  },
  {
    id: 3,
    image: '/images/chipotle.jpg',
    title: 'Chipotle Grill',
  },
  {
    id: 4,
    image: '/images/target.jpg',
    title: 'Target'
  },
  {
    id: 5,
    image: '/images/pepsi.jpg',
    title: 'Pepsi'
  },
  {
    id: 6,
    image: '/images/6flags.jpg',
    title: 'Six Flags'
  },
  {
    id: 7,
    image: '/images/sbarro.jpg',
    title: 'Sbarro Pizza'
  },
  {
    id: 8,
    image: '/images/wholefoods.jpg',
    title: 'Whole Foods'
  }
];

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className='square-slider'>
          <Slider>
            {offers.map(offer => (
              <Slider.Item offer={offer} key={offer.id}></Slider.Item>
            ))}
          </Slider>
        </div>
        <div className='round-slider'>
          <Slider>
            {offers.map(offer => (
              <Slider.RoundItem offer={offer} key={offer.id}></Slider.RoundItem>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default App;
