import React from 'react';
import { RESTAURANTS } from '../shared/restaurants';
import { Row, Col, Container} from 'reactstrap';

function Restaurants() {    

    return(
        <Container>
            <>
                <h2>Oahu's Top 3 Restaurants</h2>
                {RESTAURANTS.map(arr => {
                    return (
                        <ul key={arr.id}>
                            <Row>
                                <h3>{arr.name}</h3>
                            </Row>
                            <Row>
                                <Col lg={6}>                
                                    {arr.image}
                                </Col>
                                <Col lg={6}>
                                    <p><q>{arr.description}</q></p>
                                    <a href={arr.citationLink} target='_blank' rel="noreferrer">source: {arr.source}</a>
                                </Col>
                            </Row>
                        </ul>
                    )
                })}
            </>
        </Container>
    );
}

export default Restaurants;