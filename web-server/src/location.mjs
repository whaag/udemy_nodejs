const location = new Map();

location.set('DUBLIN', {
  city: 'Dublin',
  longitude: 53.3331,
  latitude: -6.2489,
});

location.set('CURITIBA', {
  city: 'Curitiba',
  longitude: -49.2661,
  latitude: -25.4284,
});

location.set('SAO PAULO', {
  city: 'Sao Paulo',
  longitude: -46.625290,
  latitude: -23.533773,
});

const findLocation = (place) => {
  const coordinates = location.get(place.toUpperCase());
  return coordinates ? coordinates : { longitude: undefined, latitude: undefined };
}

export default findLocation;
  