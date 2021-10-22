import './App.css';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Map, Marker, ZoomControl } from "pigeon-maps";
import RamenList from './RamenList';

import yaml from 'js-yaml';
import ramenYaml from './ramen.yml';

/**
 * 
 * name
 * rank
 * text
 */

function App() {
  const DEFAULT_LAT = 37.4550383;
  const DEFAULT_LNG = -122.0488537;
  const [lat, setLat] = useState(DEFAULT_LAT);
  const [lng, setLng] = useState(DEFAULT_LNG);
  const [reviews, setReviews] = useState([])
  const [name, setName] = useState('')
  const [text, setText] = useState('Thanks for coming through, check the list on the left')
  
  useEffect(() => {
    if (reviews.length === 0) {
      fetch(ramenYaml)
      .then(r => r.text())
      .then(text => {
        setReviews(yaml.load(text));
      })
    }
  }, [reviews]);

  function update(name, lat, lng, txt) {
    setLat(lat);
    setLng(lng);
    setName(name);
    setText(txt);
  }

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
    <div className="App">
      <div>
        <p>Header TODO</p>
      </div>
      <Container>
        <Row>
          <Col sm={4} style={{maxHeight: '75vh'}}>
            <RamenList reviews={reviews} update={update} setText={setText}/>
          </Col>
          <Col sm={8} style={{height: '100%'}}>
            <Map height={500} defaultCenter={[DEFAULT_LAT, DEFAULT_LNG]} center={[lat, lng]} defaultZoom={12}>
              {createMarkers(reviews)}
              <ZoomControl/>
            </Map>
            <h1>{name}</h1>
            <p>{text}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
