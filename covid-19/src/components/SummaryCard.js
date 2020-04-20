import React from 'react';

const SummaryCard = props => {
    console.log(props)
    return (
        <div className="data-card">
        <h2> {props.Country} {props.NewConfirmed}</h2>
            <p>{props.TotalConfirmed} {props.NewDeaths}</p>
            <p>{props.TotalDeaths}</p>
            <p>{props.NewRecovered}</p>
            <p>{props.TotalRecovered}</p>
            <p>{props.Date}</p>
        </div>
    )
}

export default SummaryCard;