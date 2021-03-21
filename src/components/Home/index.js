import React from 'react';
import Navbar from '../Navbar';
import ButtonEatMenu from '../ButtonEatMenu';
import StickyBottom from '../StickyBottom';
import ModalLocation from '../ModalLocation';

import Card from '../../components/Card';

function HomeComponent({ renderData }) {
  const getHariIni = () => {
    const bulan = [
      'Januari',
      'Febuari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];

    const hari = [
      'Senin',
      'Selasa',
      'Rabu',
      'Kamis',
      'Jumat',
      'Sabtu',
      'Minggu',
    ];
    var d = new Date();
    var date = d.getDate();
    var day = d.getDay();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();

    var dateStr = hari[day] + ', ' + date + ' ' + bulan[month] + ' ' + year;
    return dateStr;
  };

  const renderCard = () => {
    return renderData.map((dt, index) => {
      return (
        <Card
          key={index}
          image={dt.image}
          title={dt.title}
          vendor={dt.vendor}
          location={dt.location}
          price={dt.price}
          rating={dt.rating}
        />
      );
    });
  };

  return (
    <>
      <Navbar />
      <ButtonEatMenu />
      <h3>{getHariIni()}</h3>
      {renderCard()}
      <StickyBottom />
      <ModalLocation />
    </>
  );
}

export default HomeComponent;
