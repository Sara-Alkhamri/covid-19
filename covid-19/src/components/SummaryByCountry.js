import React, {useState, useEffect} from 'react';
import axios from 'axios'
import SummaryCard from './SummaryCard'

const SummaryByCountry = () => {
    const [summary, setSummary] =useState([])
   
    const getSummary = () => {
        axios
        .get('https://api.covid19api.com/summary')
        .then(res => {
            console.log(res.data)
            setSummary(res.data)
            // debugger
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
        <h4>Search By Country</h4>
        <input type="text" placeholder="Search By Country"></input>
          {/* {(summary.map(summ => (
             
              <SummaryCard key={summ.id} id={summ.id} country={summ.Country} NewConfirmed={summ.NewConfirmed}
              />)))} */}
            
        </div>
        </div>  
    )
}

export default SummaryByCountry;