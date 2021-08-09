import React from 'react';
import { Button } from 'reactstrap';


const RenderHomeCard = ({homeCard, toggler}) => {
    return(
        <Button outline onClick={toggler}><img src={homeCard.image} style={{width:500,height:500}}/></Button>
    );
};


function RenderButton({toggler, homeCards}) {

    const renderButton = homeCards.map(homeCard => {
        return (
            <RenderHomeCard  key={homeCard.id} homeCard={homeCard} toggler={toggler} />
        );
    });
        return (
            <div>
                {renderButton}
            </div>
        );
}

export default RenderButton;