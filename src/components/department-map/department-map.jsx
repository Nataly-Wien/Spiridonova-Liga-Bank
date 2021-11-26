import './department-map.scss';
import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import pin from './../../img/location.svg';

const DepartmentMap = () => {
  const mapData = {
    center: [57.3, 61.1],
    zoom: 5,
  };

  const coordinates = [
    [55.7522, 37.6156],
    [54.9924, 73.3686],
    [57.1522, 65.5272],
    [55.7887, 49.1221],
    [51.5406, 46.0086],
  ];

  const pinOptions = {
    iconLayout: `default#image`,
    iconImageHref: pin,
    iconImageSize: [37, 42],
    iconImageOffset: [0, -42],
  };

  return (
    <section className="department-map container">
      <h2 className="department-map__title title">Отделения Лига Банка</h2>
      <div className="department-map_wrapper map">
        <YMaps>
          <Map className="map__map" defaultState={mapData}>
            {coordinates.map((coordinate) => <Placemark geometry={coordinate} options={pinOptions} key={coordinate} />)}
          </Map>
        </YMaps>
      </div>
    </section>
  );
};

export default DepartmentMap;
