import React from 'react';
import { Map, Marker, ZoomControl } from "pigeon-maps";

function RamenMap(props) {
    let reviews = props.reviews;
    let defaultCenter = props.defaultCenter;
    let lat = props.lat;
    let lng = props.lng;
    const update = props.update;

    function createMarkers(revs) {
        return revs.map((review, index) => {
          if (review.lat !== lat && review.lng !== lng) {
            return <Marker
              onClick={() => update(review.name, review.lat, review.lng, review.text)}
              color={'green'}
              key={index}
              width={40}
              anchor={[review.lat, review.lng]}
            />
          } else {
            return <Marker
              color={'red'}
              key={index}
              width={50}
              anchor={[lat, lng]}
            />
          }
        })
      }

    return (
        <Map height={400} defaultCenter={defaultCenter} center={[lat, lng]} defaultZoom={10}>
            {createMarkers(reviews)}
            <ZoomControl/>
        </Map>
    )
}

export default RamenMap;