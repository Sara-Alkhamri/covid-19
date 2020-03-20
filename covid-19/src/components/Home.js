import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
            <div>data={data}</div>
        </div>
    )
}

export default Home;