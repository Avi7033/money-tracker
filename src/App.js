import {useState} from "react";
import "./App.css";

function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
   function addNewTransaction (e) {
    e.preventDefault();
    const url = process.env.REACT_APP_API_URL+ '/transaction';
    // console.log(url);
    fetch(url, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({name, description,datetime})
    }).then(response => {
      response.json().then(json => {
        console.log('result', json);
      });
    });
    
   }
  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>
      <form onSubmit={addNewTransaction}>
        <div className="basics">
          <input type="text"
          value={name} 
          onChange={e => setName(e.target.value)}
          placeholder={"+200 new samsung tv"} />
          <input 
          value={datetime}
          onChange={e => setDatetime(e.target.value)}
          type="datetime-local" />
        </div>
        <div className="description">
          <input 
          value={description}
          onChange={e => setDescription(e.target.value)}
          type="text" placeholder={"description"} />
        </div>
        <button type="submit">Add new transaction</button>
      </form>

      <div className="transactions">
         <div className="transaction">
          <div className="left">
              <div className="name">New samsung TV</div>
              <div className="description">It was time for a new tv</div>
          </div>
          <div className="right">
               <div className="price red">-$500</div>
               <div className="datetime">2024-09-19</div>
          </div>
         </div>

         <div className="transaction">
          <div className="left">
              <div className="name">Stock market</div>
              <div className="description">It was time for a new tv</div>
          </div>
          <div className="right">
               <div className="price green">+$500</div>
               <div className="datetime">2024-09-19</div>
          </div>
         </div>

         <div className="transaction">
          <div className="left">
              <div className="name">I Phone</div>
              <div className="description">It was time for a new tv</div>
          </div>
          <div className="right">
               <div className="price red">-$500</div>
               <div className="datetime">2024-09-19</div>
          </div>
         </div>

         
      </div>
    </main>
  );
}

export default App;
