import React, {useState, useEffect} from 'react';
import DataCard from './DataCard'

function SummaryByCountry() {
    const [summary, setSummary] =useState([])

    const getSummary = () => {
        axios
        .get('https://api.covid19api.com/summary')
        .then(res => {
            console.log(res.data)
            setSummary(res.data)
        })
        .catch(err => console.log(err.res))
    }
    useEffect(() => {
        getSummary();
    }, [])
    
    return (
       <div className="container">
        <h1>Data List</h1>
        <div className="list-container">
           
            
        </div>
        </div>  
    )
}

export default SummaryByCountry;