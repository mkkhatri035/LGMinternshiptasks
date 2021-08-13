import React from "react";
import { useState } from "react";
import "./styles.css";
import Loader from "./loader.js";

function Alts({ url, alte }) {
  var alter = "image of avatar of " + { alte };
  return <img src={url} alt={alter} />;
}
export default function App() {
  const [data, setdata] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const loaddata = async () => {
    setIsLoader(true);
    setdata([]);
    const res = await fetch("https://reqres.in/api/users?page=1");
    const jsondata = await res.json();
    setTimeout(() => {
      setdata(jsondata["data"]);
      setIsLoader(false);
    }, 2000);
  };
  return (
    <div className="App">
      <div className="head">
        <img
          src="data:image/png;base64,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"
          alt="company logo"
        />
      </div>
      <button key="getdata" onClick={loaddata}>
        Load Users Data
      </button>
      <ul className="lists">
        {data.map(({ id, avatar, first_name, last_name, email }) => (
          <li key={id} style={{ listStyle: "none" }}>
            <Alts url={avatar} alte={first_name} />
            <h1>{first_name + " " + last_name}</h1>
            <h3>{email}</h3>
          </li>
        ))}
      </ul>
      <Loader show={isLoader} />
    </div>
  );
}
