import React from 'react';
import Icon from '@mdi/react';
import { mdiClose, mdiMapMarker } from '@mdi/js';

function ListLocation({ propsData }) {
  const renderList = () => {
    return propsData.map((dt, index) => {
      let potongLokasiDesc = '';
      if (dt.lokasi_desc.length <= 47) {
        potongLokasiDesc = dt.lokasi_desc;
      } else {
        potongLokasiDesc = dt.lokasi_desc.slice(0, 47) + '...';
      }
      return (
        <div className="listlocation-container">
          <div className="listlocation-container__icon">
            <Icon
              className="iconlocation"
              path={mdiMapMarker}
              size={1}
              color="gray"
            />
          </div>
          <div className="listlocation-container__isi">
            <h3>{dt.lokasi_name}</h3>
            <p>{potongLokasiDesc}</p>
            <div className="garis"></div>
          </div>
        </div>
      );
    });
  };

  return <div className="listlocation">{renderList()}</div>;
}

export default ListLocation;
