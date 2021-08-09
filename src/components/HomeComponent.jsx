import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { MODALS } from '../shared/modals';
// import { Link } from 'react-router-dom';

// toggleModal() {
//     this.setState({
//         isModalOpen: !this.state.isModalOpen
//     });
// }

function Home({campsite}) {
    return (
        <Card>
            <ul className="list-unstyled">
                <li>Beaches</li>
                    <CardImg src={MODALS[0].image} />
                <li>Culture</li>
                <li>Geography</li>
                <li>Restaurants</li>
                <li>Shopping</li>
            </ul>
            {/* <Link to={`/directory/${campsite.id}`}> */}
                {/* <CardImg width="100%" src={"public\assets\images/oahu-road.jpg"} /> */}
                {/* <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>
                </CardImgOverlay>
            </Link> */}
        </Card>
    );
}

// function Home(props) {

//     const directory = props.campsites.map(campsite => {
//         return (
//             <div key={campsite.id} className="col-md-5 m-1">
//                 <RenderHomeItem campsite={campsite} />
//             </div>
//         );
//     });

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col">
//                     <Breadcrumb>
//                         <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
//                         <BreadcrumbItem active>Directory</BreadcrumbItem>
//                     </Breadcrumb>
//                     <h2>Directory</h2>
//                     <hr />
//                 </div>
//             </div>
//             <div className="row">
//                 {directory}
//             </div>
//         </div>
//     );
// }

export default Home;