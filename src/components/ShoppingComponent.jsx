import React from 'react';
import { SHOPPING } from '../shared/shopping';
import { Row, Col} from 'reactstrap';

function Shopping() {    

    return(
        <div>
            <>
                <h2>Oahu's Top 3 Places to Shop</h2>
                {SHOPPING.map(arr => {
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
        </div>
    );
}

export default Shopping;