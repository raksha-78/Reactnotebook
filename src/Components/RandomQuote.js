import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Notes from './Notes';

const MainComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API and update state
    const fetchData = async () => {
      try {
        const response = await axios.get('https://example-api.com/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>API Content in Cards</h2>
      <div className="cardContainer">
        {data.map((item, index) => (
          <Card key={index}title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
