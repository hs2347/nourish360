import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    const initialize = () => {
      const pyrmont = new window.google.maps.LatLng(-33.8665433, 151.1956316);
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 15,
      });

      const input = document.getElementById('searchTextField');
      const autocomplete = new window.google.maps.places.Autocomplete(input);
      autocomplete.bindTo('bounds', map);

      const marker = new window.google.maps.Marker({
        map: map,
      });

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        console.log(place);
        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
        }
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);

        const service = new window.google.maps.places.PlacesService(map);
        service.nearbySearch({ location: place.geometry.location, radius: 500 }, (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
              createMarker(results[i]);
            }
          }
        });
      });

      const createMarker = (place) => {
        const marker = new window.google.maps.Marker({
          map: map,
          position: place.geometry.location,
        });

        window.google.maps.event.addListener(marker, 'click', () => {
          alert(place.name);
          if (place.photos && place.photos.length > 0) {
            window.open(place.photos[0].getUrl(), "_blank");
          }
        });
      };
    };

    window.google.maps.event.addDomListener(window, 'load', initialize);
  }, []);

  return (
    <div className="bg-[#9ed1e1] min-h-screen flex flex-col items-center">
      <h2 className="font-sans text-5xl text-center m-0 text-white mt-10">
        DISCOVER EVENTS<br />NEAR YOU
      </h2>
      <input
        id="searchTextField"
        type="text"
        className="text-lg p-3 w-11/12 my-4 rounded-lg"
      />
      <div id="map" className="w-full h-96"></div>
    </div>
  );
};

export default MapComponent;
