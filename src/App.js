
import './App.css';
import React, {useState} from 'react';




function App() {
    const [allCoins, setAllCoins] = useState([])

    const clickHandler = () => {
        console.log("clicked")
        //allows us to fetch the api
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        //converts to json
        .then(response=>{  
            return response.json();
        })
         //word that represents the response from the api call 
        .then(response =>{
            console.log("the response looks like this")
            console.log(response)
            response.sort(function(a,b){
                return a.current_price - b.current_price;
            })
            setAllCoins(response)

        })
        //if there are any errors this is where we will handle them
        .catch(error=>{
            console.log()
        }) 
    }

    return (
        <div className="App">
            <h1>Top Cryptos Today!</h1>
            <button onClick={clickHandler} className="btn btn-success">Digital Assets</button>
            {
                allCoins.map((coin, idx)=>{
                    return <div key = {idx} className = "card">
                        <div className="card-body">
                            <h2>{coin.name}</h2>
                            <p className="card-text">Current Price: {coin.current_price}</p>
                        </div>
                    </div>
                })
            }
        </div>

    );
}

export default App;
