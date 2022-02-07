import React from 'react';
import cx from 'classnames';
import SliderContext from './context'
import Mark from './Mark'
import './Item.scss'

const RoundItem = ({ offer }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === offer.id;

      return (
        <div
          ref={elementRef}
          className={cx('round-item', {
            'item--open': isActive,
          })}
        >
          <img src={offer.image} alt="" />
          {isActive && <Mark />}
          <div className='round-title'>
            <h1>{offer.title}</h1>
          </div>
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default RoundItem;
