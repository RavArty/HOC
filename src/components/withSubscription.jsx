import React, { useState, useEffect } from 'react';
import axios from 'axios';

const withSubscription = WrappedComponent => {
  const WithSubscription = ({ url, ...otherProps }) => {
    const [data, setData] = useState([]);
    const [amount] = useState(5);

    useEffect(() => {
      axios
        .get(url)
        .then(response => setData(response.data.slice(0, amount)))
        .catch(error => console.log('Axios: ', error));
    }, [url, amount]);

    return data.length < 1 ? (
      <h1>loading</h1>
    ) : (
      <WrappedComponent data={data} {...otherProps} />
    );
  };

  return WithSubscription;
};

export default withSubscription;
