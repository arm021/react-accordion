import React, { useState, useEffect } from 'react';
import Accordion from './Accordion';

const App = () => {

  const url = 'https://jsonplaceholder.typicode.com/posts';

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setPosts(data);
    } catch (error) {
        setError(error.message);
        console.error('Error fetching posts:', error);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Using the loading and error states in the UI
  if (loading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={fetchPosts}>Try Again</button>
      </div>
    );
  }

  return (
    <div className='container'>
      <h1 className='page-header my-3 p-5 text-center'>React Accordion App</h1>

      <div className='row'>
        {posts.map((post, index) => (
          <div className='col-md-6 col-sm-12' key={index}>
            <Accordion {...post} />
          </div>
        ))}
      </div>
    </div>
  );  
}

export default App;