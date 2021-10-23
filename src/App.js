import './App.css';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

import RamenList from './RamenList';
import RamenMap from './RamenMap';
import Faq from './Faq';

import ramenYaml from './ramen.yml';
import yaml from 'js-yaml';

function App() {
  const DEFAULT_LAT = 37.4550383;
  const DEFAULT_LNG = -122.0488537;
  const STARTING_TEXT = 'Thanks for coming through. Check the list on the left and the FAQ'

  const [lat, setLat] = useState(DEFAULT_LAT);
  const [lng, setLng] = useState(DEFAULT_LNG);
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [text, setText] = useState(STARTING_TEXT);
  const [faqActive, setFaqActive] = useState(false);
  
  useEffect(() => {
    if (reviews.length === 0) {
      fetch(ramenYaml)
      .then(r => r.text())
      .then(text => {
        setReviews(yaml.load(text));
      })
    }
  }, [reviews, faqActive]);

  function update(name, lat, lng, txt) {
    setLat(lat);
    setLng(lng);
    setName(name);
    setText(txt);
  }

  function reset() {
    setFaqActive(false);
    setName('');
    setText(STARTING_TEXT);
    setLat(DEFAULT_LAT);
    setLng(DEFAULT_LNG);
  }

  return (
    <div className="App">
      <Navbar>
        <Container>
          <Navbar.Brand>
            <div onClick={() => reset()}>
              <h2>jon's ramen list</h2>
            </div>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <div onClick={() => setFaqActive(true)}>
              <h3>faq</h3>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      { faqActive &&
        <div>
          <Faq/>
          <Button onClick={() => setFaqActive(false)}>Back</Button>
        </div>
      }
      { !faqActive &&
        <Container style={{maxWidth: '85vw'}}>
          <Row>
            <Col sm={4} style={{maxHeight: '80vh'}}>
              <RamenList reviews={reviews} update={update} setText={setText}/>
            </Col>
            <Col sm={8} style={{height: '100%'}}>
              <RamenMap
                reviews={reviews}
                defaultCenter={[DEFAULT_LAT, DEFAULT_LNG]}
                lat={lat}
                lng={lng}
                update={update}
              />
              <h1>{name}</h1>
              <p>{text}</p>
            </Col>
          </Row>
        </Container>
      }
    </div>
  );
}

export default App;
