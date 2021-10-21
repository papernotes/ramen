import './App.css';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Map, Marker, ZoomControl } from "pigeon-maps";

import yaml from 'js-yaml';
import ramenYaml from './ramen.yml';

/**
 * 
 * name
 * rank
 * review
 */
function App() {
  const [lat, setLat] = useState(37.3966639);
  const [lng, setLng] = useState(-121.97524799999998);
  const [reviews, setReviews] = useState([])
  
  useEffect(() => {
    if (reviews.length === 0) {
      fetch(ramenYaml)
      .then(r => r.text())
      .then(text => {
        setReviews(yaml.load(text));
      })
    }
  }, [reviews]);

  function update(lat, lng) {
    setLat(lat);
    setLng(lng);
  }

  return (
    <div className="App">
      <div>
        <p>Header TODO</p>
      </div>
      <Container>
        <Row>
          <Col sm={4} style={{backgroundColor: 'beige'}}>
            <ListGroup>
              { reviews.map((review, index) => 
                <ListGroup.Item onMouseEnter={(e) => {update(review.lat, review.lng)}} key={index}>{review.name}</ListGroup.Item>) 
              }
            </ListGroup>
          </Col>
          <Col sm={8} style={{height: '100vh'}}>
            <Map height={500} defaultCenter={[lat, lng]} center={[lat, lng]} defaultZoom={10}>
              <Marker width={50} anchor={[lat, lng]} />
              <ZoomControl/>
            </Map>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
