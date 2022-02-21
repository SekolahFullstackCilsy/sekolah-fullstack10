import React, { useEffect, useState } from 'react';

const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(false);

  const renderContent = () => {
    setTimeout(() => {
      setLoading(false)
    }, 3000); //ms = 3s
  }

  const getData = () => {
    setLoading(true);
    setData(true);
  }

  useEffect(() => {
    renderContent();

    return () => {
      alert('component home akan di unmount');
    }
  }, [data]);

  if (loading) {
    return (
      <div>
        <h1>Loading content...</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>Homepage</h1>
      <button type="button" onClick={getData}>Get Data</button>
      {data === true && (
        <h4>Data di load</h4>
      )}
    </div>
  )
}

export default Homepage