import React from 'react';
// import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
// import { Link } from 'react-router-dom';

function Home(props) {
    return (
            <div className="container">
                <h6>Site Directory</h6>
                <ul className="list-unstyled">
                    <li>Home</li>
                    <li>Beaches</li>
                    <li>Culture</li>
                    <li>Geography</li>
                    <li>Restaurants</li>
                    <li>Shopping</li>
                </ul>
            </div>                    
    );
}

// function RenderCard({item}) {
//     return (
//         <Card>
//             <CardImg src={item.image} alt={item.name} />
//             <CardBody>
//                 <CardTitle>{item.name}</CardTitle>
//                 <CardText>{item.description}</CardText>
//             </CardBody>
//         </Card>
//     );
// }

// function Home(props) {
//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-md m-1">
//                     <RenderCard item={props.campsite} />
//                 </div>
//                 <div className="col-md m-1">
//                     <RenderCard item={props.promotion} />
//                 </div>
//                 <div className="col-md m-1">
//                     <RenderCard item={props.partner} />
//                 </div>
//             </div>
//         </div>
//     );
// }

export default Home;