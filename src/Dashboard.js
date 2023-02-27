import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Home = ({ data }) => {
  return (
    <div>
      <h2>Home</h2>
      <p>{data}</p>
    </div>
  );
};

const About = ({ data }) => {
  return (
    <div>
      <h2>About</h2>
      <p>{data}</p>
    </div>
  );
};

const Contact = ({ data }) => {
  return (
    <div>
      <h2>Contact</h2>
      <p>{data}</p>
    </div>
  );
};

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from an API or a database
    // Example: fetch('/api/data').then(response => setData(response.json()));
    setData([]);
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home data={data} />
        </Route>
        <Route path="/about">
          <About data={data} />
        </Route>
        <Route path="/contact">
          <Contact data={data} />
        </Route>
      </Switch>
    </div>
  );
}

export default Dashboard;
