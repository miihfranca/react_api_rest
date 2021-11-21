import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function App() {

  const [user, setUser] = useState('');
  const [button, setButton] = useState(true);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${user}`)
    .then((resp) => setUser(resp.data))
    .catch((error) => console.log(error))
  },[button])

  return (
    <div>
      <h1>Procure seu usuario do Git</h1>

      <input type="text" onChange={(e) => {
        setUser(e.target.value)
      }} />
      <button onClick={() => {
        button ? setButton(false) : setButton(true)
      }} >🔎</button>
      <div>
        <img src={user?.avatar_url} />
        <h1>{user?.name}</h1>
        <p>{user?.bio}</p>
      </div>
    </div>
  );
}