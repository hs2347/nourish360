import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    // Function to initialize the map and autocomplete
    const initialize = () => {
      // Check if `google.maps` is available
      if (window.google && window.google.maps && window.google.maps.places) {
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
          if (place.geometry?.viewport) {
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
              results.forEach(createMarker);
            }
          });
        });

        const createMarker = (place) => {
          const marker = new window.google.maps.Marker({
            map: map,
            position: place.geometry.location,
          });

          marker.addListener('click', () => {
            alert(place.name);
            if (place.photos && place.photos.length > 0) {
              window.open(place.photos[0].getUrl(), "_blank");
            }
          });
        };
      } else {
        console.error('Google Maps API has not been loaded correctly.');
      }
    };

    // Dynamically load the Google Maps API script
    const loadGoogleMapsScript = () => {
      if (!window.google || !window.google.maps || !window.google.maps.places) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBU8TWgP9caS62_BbZY2bFWHWegtudaANk&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = initialize;
        script.onerror = () => {
          console.error('Failed to load Google Maps API.');
        };
        document.head.appendChild(script);
      } else {
        initialize();
      }
    };

    loadGoogleMapsScript();
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
        placeholder="Search for events or places"
      />
      <div id="map" className="w-full h-96"></div>
    </div>
  );
};

export default MapComponent;





//AIzaSyBU8TWgP9caS62_BbZY2bFWHWegtudaANk