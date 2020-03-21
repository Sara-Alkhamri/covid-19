import React from 'react';

const DataCard = props => {
    // console.log(props)

    return (
        <div className="data-card">
            <h2> {props.Country} {props.Province}</h2>
            <p>{props.Lat} {props.Lon}</p>
            <p>{props.Date}</p>
            <p>{props.Cases}</p>
            <p>{props.Status}</p>
        </div>
    )

}

export default DataCard;