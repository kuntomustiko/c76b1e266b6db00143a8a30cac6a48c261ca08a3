import React from 'react';
import Icon from '@mdi/react';
import { mdiArrowLeft, mdiChevronDown } from '@mdi/js';

import { useDispatch } from 'react-redux';
import {
  modalLocationOpenAction,
  modalAddOpenAction,
} from '../../redux/actions/index';

function Navbar() {
  const dispatch = useDispatch();

  const onClick = () => {
    const modalOpen = {
      overflow: 'hidden',
      height: '100vh',
      left: '0px',
      display: 'block',
    };

    dispatch(modalLocationOpenAction(modalOpen));

    const modalOpenAdd = {
      display: 'none',
      position: 'relative',
      width: 'auto',
      margin: '0px',
    };
    dispatch(modalAddOpenAction(modalOpenAdd));
  };

  return (
    <div className="navbar">
      <Icon path={mdiArrowLeft} size={1} color="gray" />
      <div className="navbar-text">
        <p>Alamat Pengantar</p>
        <div className="navbar-text__location" onClick={onClick}>
          <h4>Tokopedia Tower</h4>
          <Icon path={mdiChevronDown} size={1} color="salmon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
