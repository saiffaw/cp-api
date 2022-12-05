import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

function UserList() {
  const [name, setname] = useState([]);
  const getdat = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      setname(res.data);
    });
  };
  useEffect(() => getdat(), []);

  return (
    <div className="App">
      {name.map((user, index) => {
        return (
          <div key={index} className="liste">
            <h2>{user.name}</h2>
            <h2>{user.username}</h2>
            <h2>{user.email}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default UserList;
