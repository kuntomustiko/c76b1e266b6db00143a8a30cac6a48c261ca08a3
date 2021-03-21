import React from 'react';
import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';
import { mdiStarOutline, mdiStarHalfFull, mdiPlus } from '@mdi/js';
import Button from '../Button';

import { useSelector, useDispatch } from 'react-redux';
import { modalAddOpenAction } from '../../redux/actions/index';

function Card(props) {
  const dispatch = useDispatch();

  const reduxDisplay = useSelector(
    (state) => state.modalAddOpenReducer.display
  );
  const reduxPosition = useSelector(
    (state) => state.modalAddOpenReducer.position
  );
  const reduxMargin = useSelector((state) => state.modalAddOpenReducer.margin);
  const reduxWidth = useSelector((state) => state.modalAddOpenReducer.width);

  const makeStar = () => {
    const angkaBulat = parseInt(props.rating.split('.')[0]);
    const angkaDecimal = parseInt(props.rating.split('.')[1]);
    const starTemplate = [];
    for (let x = 0; x < 5; x++) {
      starTemplate.push(<Icon path={mdiStarOutline} size={0.5} color="red" />);
    }

    if (props.rating == 0) {
      return starTemplate;
    } else if (angkaDecimal > 0 && angkaBulat < 1) {
      // rating 0.5
      for (let x = 0; x < 1; x++) {
        starTemplate.shift();

        starTemplate.unshift(
          <Icon path={mdiStarHalfFull} size={0.5} color="red" />
        );
      }

      return starTemplate;
    } else if (angkaBulat >= 1) {
      // kalau ada angka decimal
      if (angkaDecimal > 0) {
        // di hapus isi array sebanyak angka rating
        for (let x = 0; x < angkaBulat + 1; x++) {
          starTemplate.shift();
        }

        // baru isi setengah array
        for (let index = 0; index < 1; index++) {
          starTemplate.unshift(
            <Icon path={mdiStarHalfFull} size={0.5} color="red" />
          );
        }

        // baru isi full array
        for (let index = 0; index < angkaBulat; index++) {
          starTemplate.unshift(<Icon path={mdiStar} size={0.5} color="red" />);
        }
      } else {
        // di hapus isi array sebanyak angka rating
        for (let x = 0; x < angkaBulat; x++) {
          starTemplate.shift();
        }

        // baru isi array di isi dengan nilai rating
        for (let index = 0; index < angkaBulat; index++) {
          starTemplate.unshift(<Icon path={mdiStar} size={0.5} color="red" />);
        }
      }
      return starTemplate;
    }
  };

  const addClicked = () => {
    console.log('add Clicked');

    const modalOpen = {
      display: 'flex',
      position: 'fixed',
      margin: '14px',
      width: '325px',
    };

    dispatch(modalAddOpenAction(modalOpen));
  };

  const clickedCard = () => {
    console.log('clicked card');

    const modalOpen = {
      display: 'none',
      position: 'relative',
      width: 'auto',
      margin: '0px',
    };
    dispatch(modalAddOpenAction(modalOpen));
  };

  return (
    <div className="card">
      <img
        className="card-image"
        onClick={clickedCard}
        src={props.image}
        alt={props.title}
      />
      <div className="card-content">
        <div className="card-rating">
          <span className="card-rating__text">{props.rating}</span> {makeStar()}
        </div>
        <h3 className="card-title">{props.title}</h3>
        <p className="card-subtitle">
          by {props.vendor} . {props.location}
        </p>
        <div className="card-contentbawah">
          <h1 className="card-price">Rp. {props.price}</h1>
          <Button isAdd onClick={addClicked}>
            <div className="isiBtn">
              <span>Add</span>
              <Icon path={mdiPlus} size={0.7} color="white" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
