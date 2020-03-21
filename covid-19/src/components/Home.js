import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataCard from './DataCard'

function Home() {
    const [data, setData] = useState([])

    const getData = () => {
        axios
        .get('https://api.covid19api.com/all')
        .then(res => {
            console.log(res.data)
            setData(res.data)
        })
        .catch(err => console.log(err.res));
    }
    useEffect(() => {
        getData();
      }, []);

    return (
        <div className="container">
            <h3>Home Component</h3>
            {data.map(props => (
                <DataCard country={props.Country} province={props.Province} lat={props.Lat}
                lon={props.Lon} date={props.Date} cases={props.Cases} status={props.Status}
                />
            ))}
           
        </div>
    )
}

export default Home;