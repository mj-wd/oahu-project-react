import React from 'react';
import { SIGHTSEEING } from '../shared/sightseeing';
import { Row, Col} from 'reactstrap';

function Siteseeing() {    

    return(
        <div>
            <>
                <h2>Oahu's Top 3 Spots to Peep</h2>
                {SIGHTSEEING.map(arr => {
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

export default Siteseeing;