import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const Useeffect = () => {
  const [resourceType, setResourceType] = useState('');
  const [data, setData] = useState([]);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowSize(() => window.innerWidth);
  }

  useEffect(() => {
    if (!resourceType) return;
    axios.get(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => setData(response.data));
  }, [resourceType]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className='p-2'>
      <button className='btn btn-info' onClick={() => setResourceType('posts')}>posts</button>
      <button className='btn btn-info ml-1' onClick={() => setResourceType('comments')}>comments</button>
      <button className='btn btn-info ml-1' onClick={() => setResourceType('users')}>users</button>
      {data.length && data.map(item => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>;
      })}
      <div>{windowSize}</div>
    </div>
  )
}
