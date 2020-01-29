import React, { useState, useEffect } from 'react';
import axios from 'axios';

const withSubscription = WrappedComponent => {
  const WithSubscription = props => {
    const [data, setData] = useState([]);
    const [amount] = useState(5);

    useEffect(() => {
      axios
        .get('url')
        .then(response => setData(response.slice(0, amount)))
        .catch(error => console.log(error));
    });
  };
  return data.length < 1 ? (
    <h1>loading</h1>
  ) : (
    <WrappedComponent data={data} {...props} />
  );

  return WithSubscription;
};

export default withSubscription;
