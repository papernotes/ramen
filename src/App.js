import './App.css';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h2>jon's ramen / noodle list</h2>
          </Col>
          <Col xs={4}></Col>
          <Col>
            <button onClick={() => setFaqActive(true)}>faq</button>
          </Col>
        </Row>
      </Container>
      { faqActive &&
        <div>
          <Faq/>
          <button onClick={() => setFaqActive(false)}>Back</button>
        </div>
      }
      { !faqActive &&
        <Container>
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
