import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function RamenList(props) {
    let reviews = props.reviews;
    const update = props.update;
    const setText = props.setText;
    let categories = {1: [], 2: [], 3: [], 4:[], 5: []};

    function getHeader(ranking) {
        switch(ranking) {
            case '1':
                return 'Yes';
            case '2':
                return 'Try it';
            case '3':
                return "It's aite";
            case '4':
                return 'Nah'
            default:
                return "haven't been yet"
        }
    }

    function generateListGroup(reviews, ranking) {
        const filtered = reviews.filter(review => review.rank.toString() === ranking);
        const header = getHeader(ranking);

        return(
            <div key={ranking}>
                <div style={{textAlign: 'left'}}>
                    <h2>{header}</h2>
                </div>
                <ListGroup variant='flush'>
                    {
                        filtered
                            .sort((review_a, review_b) => review_a.name.localeCompare(review_b.name))
                            .map((review, index) =>
                                <ListGroup.Item
                                    action
                                    onClick={() => {update(review.name, review.lat, review.lng); setText(review.text)}}
                                    key={index}
                                >
                                    {review.name}
                                </ListGroup.Item>
                            )
                    }
                </ListGroup>
            </div>
        )
    }

    function generateFullList(reviews) {
        reviews.forEach(review => categories[review.rank].push(review));
        return Object.keys(categories).map((key) => generateListGroup(categories[key], key));
    }

    return (
        <div style={{maxHeight: '100%', overflow: 'scroll'}} >
            {generateFullList(reviews)}
        </div>
    )
}

export default RamenList;