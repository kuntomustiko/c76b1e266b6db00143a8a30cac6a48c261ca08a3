import React, { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiClose, mdiMapMarker } from '@mdi/js';
import ListLocation from '../ListLocation';
import axios from '../../config/axios';

import { useSelector, useDispatch } from 'react-redux';
import { modalLocationOpenAction } from '../../redux/actions/index';

function ModalLocation() {
  const [data, setData] = useState([]);
  const [modalPosition, setModalPosition] = useState('5000px');
  const dispatch = useDispatch();

  const [inputLokasiChange, setInputLokasiChange] = useState('');

  const reduxLeft = useSelector((state) => state.modalLocationOpenReducer.left);
  const reduxDisplay = useSelector(
    (state) => state.modalLocationOpenReducer.display
  );

  useEffect(() => {
    getData();
  }, [reduxLeft]);

  useEffect(() => {
    searchLokasi();
  }, [inputLokasiChange]);

  const searchLokasi = () => {
    let dataHasilSearch = [
      {
        lokasi_name: '',
        lokasi_desc: '',
      },
    ];

    if (inputLokasiChange == '') {
      getData();
    } else {
      data.map((dt, index) => {
        const lokasiname = dt.lokasi_name.toLowerCase();
        const lokasichange = inputLokasiChange.toLocaleLowerCase();
        const cocok = lokasiname.includes(lokasichange);

        if (cocok) {
          if (dataHasilSearch[0].lokasi_name == '') {
            dataHasilSearch.shift();
            dataHasilSearch.push({
              lokasi_name: dt.lokasi_name,
              lokasi_desc: dt.lokasi_desc,
            });
          } else {
            dataHasilSearch.push({
              lokasi_name: dt.lokasi_name,
              lokasi_desc: dt.lokasi_desc,
            });
          }
        }
      });
    }

    setData(dataHasilSearch);
  };

  const getData = () => {
    axios.get('/lokasi').then((res) => {
      setData(res.data);
    });
  };

  const onclick = () => {
    setModalPosition(5000);
    const modalOpen = { overflow: '', height: '', left: '', display: 'none' };
    dispatch(modalLocationOpenAction(modalOpen));
  };
  return (
    <div
      className="modallocation"
      style={{
        left: reduxLeft ? reduxLeft : modalPosition,
        display: reduxDisplay,
      }}>
      <div className="modallocation-samar" onClick={onclick}></div>
      <div className="modallocation-container">
        <div className="icon-close" onClick={onclick}>
          <Icon path={mdiClose} size={1} color="gray" />
        </div>
        <div className="modallocation-container__isi">
          <h2>Cek Makanan yang tersedia di lokasi kamu!</h2>
          <form action="">
            <div class="input-container">
              <Icon
                className="iconlocation"
                path={mdiMapMarker}
                size={1.5}
                color="red"
              />

              <input
                onChange={(e) => setInputLokasiChange(e.target.value)}
                class="input-field"
                type="text"
                placeholder="lokasi"
                name="lokasi"
              />
            </div>
          </form>

          <ListLocation propsData={data} />
        </div>
      </div>
    </div>
  );
}

export default ModalLocation;
