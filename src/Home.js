import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RamenList from './RamenList';
import RamenMap from './RamenMap';
import ramenYaml from './ramen.yml';
import yaml from 'js-yaml';

function Home() {
    const DEFAULT_LAT = 37.7649439;
    const DEFAULT_LNG = -122.4640632;
    const STARTING_TEXT = 'Thanks for coming through. Check the list on the left and the FAQ.\nIf you find yourself liking the places I like, maybe this list is for you.'
  
    const [lat, setLat] = useState(DEFAULT_LAT);
    const [lng, setLng] = useState(DEFAULT_LNG);
    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState('');
    const [text, setText] = useState(STARTING_TEXT);
    
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

    return(
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
                <div style={{whiteSpace:'break-spaces'}}>
                <h1>{name}</h1>
                <p>{text}</p>
                </div>
            </Col>
            </Row>
        </Container>
    );
}

export default Home;