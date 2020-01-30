import React, { useState, useEffect } from 'react';
import Spinner from './spinner.component';
import axios from 'axios';

const withSubscription = WrappedComponent => {
  const WithSubscription = ({ url, ...otherProps }) => {
    const [data, setData] = useState([]);
    const [amount] = useState(5);

    useEffect(() => {
      setTimeout(() => {
        axios
          .get(url)
          .then(response => setData(response.data.slice(0, amount)))
          .catch(error => console.log('Axios: ', error));
      }, 2000);
    }, [url, amount]);

    return data.length < 1 ? (
      <Spinner />
    ) : (
      <WrappedComponent data={data} {...otherProps} />
    );
  };

  return WithSubscription;
};

export default withSubscription;
