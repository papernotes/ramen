import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function RamenList(props) {
    const reviews = props.reviews;
    const update = props.update;
    const setText = props.setText;

    return (
        <ListGroup style={{maxHeight: '100%', overflow: 'scroll'}} variant='flush'>
        { reviews.map((review, index) => 
          <ListGroup.Item 
            action
            onClick={() => {update(review.name, review.lat, review.lng); setText(review.text)}}
            href={`#${index}`}
            key={index}
          >
            {review.name}
          </ListGroup.Item>)
        }
      </ListGroup>
    )
}

export default RamenList;