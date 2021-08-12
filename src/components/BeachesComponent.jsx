import React from 'react';
import { BEACHES } from '../shared/beaches';
import { Row, Col, Container} from 'reactstrap';

function Beaches() { 

    return(
        <Container>
            <>
                <h2>Oahu's Top 3 Beaches</h2>
                {BEACHES.map(arr => {
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

export default Beaches;