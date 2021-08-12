import React from 'react';
import { BEACHES } from '../shared/beaches';
import { Row, Col} from 'reactstrap';

function Beaches() {    

    return(
        <div>
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
                                    <p>source:&nbsp;{arr.citation}</p>
                                </Col>
                            </Row>
                        </ul>
                    )
                })}
            </>
        </div>
    );
}

export default Beaches;