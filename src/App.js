import './App.css';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Map, Marker } from "pigeon-maps"

function App() {
  const [lat, setLat] = useState(50.879);
  const [lng, setLng] = useState(4.6997);

  return (
    <div className="App">
      <div>
        <p>Hello</p>
      </div>
      <Container>
        <Row>
          <Col sm={4} style={{backgroundColor: 'blue'}}>
            List
          </Col>
          <Col sm={8} style={{height: '100vh'}}>
            <Map height={500} defaultCenter={[lat, lng]} defaultZoom={11}>
              <Marker width={50} anchor={[lat, lng]} />
            </Map>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
